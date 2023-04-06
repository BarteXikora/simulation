/*
    Physics Component
    Parent for all elements physical elements. It stores all childrens refs. Calculates new physics parameters
    of each child in every frame.
*/

import React, { useRef, Children, cloneElement } from 'react'
import { useFrame } from '@react-three/fiber'

import handleGravity from '../../functions/handleGravity'
import handleAirResistance from '../../functions/handleAirResistance'
import calculatePosition from '../../functions/calculatePosition'
import findCollisions from '../../functions/findCollisions'
import handleCollisions from '../../functions/handleCollisions'

const Physics = ({ children, gravity = { x: 0, y: -10 }, airResistance = 80 }) => {
    // Ref for all children:
    const physicsRef = useRef([])

    // Calculates physics parameters of each child every frame:
    useFrame((state, delta) => {
        physicsRef.current.forEach(current => {

            // Calculations for dynamic objects:
            if (current.physics.physics === 'dynamic') {

                // Handles gravity:
                current.physics.velocity = handleGravity(current, gravity, delta)

                // Handles air resistance:
                current.physics.velocity = handleAirResistance(current, airResistance, delta)

                // Gets list of collisions:
                current.collisions = findCollisions(current, physicsRef.current)

                // Handle collisions if there are any:
                if (current.collisions.length > 0) current.physics._velocity = handleCollisions(current, current.collisions)
            }
        })

        physicsRef.current.forEach(current => {

            // Applies velocity calculated by handle collisions function:
            if (current.physics.physics === 'dynamic') if (current.physics._velocity) {
                current.physics.velocity = current.physics._velocity
                current.physics._velocity = null
            }

            // Applies calculations by changinch position based on valocity:
            const newPosition = calculatePosition(current)
            current.position.set(newPosition.x, newPosition.y, current.position.z)
        })
    })

    // Renders children with refs:
    return <>{
        Children.map(children, child => cloneElement(
            child,
            {
                ref: element => physicsRef.current.push({
                    ...element,

                    // Adds 'physics' object to store data:
                    physics: {

                        // Physics type: static | dynamic: 
                        physics: child.type.physicsType || 'static',

                        // Object type: ball | ring...
                        type: child.props.type || 'ball',

                        // Objects mass:
                        mass: child.props.config ? child.props.config.mass || 1 : 1,

                        // Objects radius (considerd if type == ball, or ring...):
                        radius: child.props.config ? child.props.config.radius || 1 : 1,

                        // Velocity of an object:
                        velocity: child.props.config ? child.props.config.startVelocity || { x: 0, y: 0 } : { x: 0, y: 0 },

                        // Temporary velocity calculated by handle collision function:
                        _velocity: null,

                        // Collisions:
                        collisions: []
                    }
                })
            }
        ))
    }</>
}

export default Physics