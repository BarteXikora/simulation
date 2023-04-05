import React, { useRef, Children, cloneElement } from 'react'
import { useFrame } from '@react-three/fiber'

const Physics = ({ children }) => {
    const physicsRef = useRef([])

    useFrame((state, delta) => {
        physicsRef.current.forEach(current => {
            console.log(current.physics)
        })
    })

    return <>{
        Children.map(children, child => cloneElement(
            child,
            {
                ref: element => physicsRef.current.push({
                    ...element,
                    physics: {
                        physics: child.type.physicsType || 'static',
                        type: child.props.type || 'ball',
                        velocity: child.props.config ? child.props.config.startVelocity || { x: 0, y: 0 } : { x: 0, y: 0 }
                    }
                })
            }
        ))
    }</>
}

export default Physics