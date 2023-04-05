/*
    Physics Component
    Parent for all elements physical elements. It stores all childrens refs. Calculates new physics parameters
    of each child in every frame.
*/

import React, { useRef, Children, cloneElement } from 'react'
import { useFrame } from '@react-three/fiber'

import handleGravity from '../../functions/handleGravity'

const Physics = ({ children }) => {
    // Ref for all children:
    const physicsRef = useRef([])

    // Calculates physics parameters of each child every frame:
    useFrame((state, delta) => {
        physicsRef.current.forEach(current => {

            // Calculations for dynamic objects:
            if (current.physics.physics === 'dynamic') {

                // Handles gravity:
                current.physics.velocity = handleGravity(current, delta)
            }
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

                        // Velocity of an object:
                        velocity: child.props.config ? child.props.config.startVelocity || { x: 0, y: 0 } : { x: 0, y: 0 }
                    }
                })
            }
        ))
    }</>
}

export default Physics