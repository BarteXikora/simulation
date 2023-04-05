import React, { useRef, Children, cloneElement } from 'react'

const Physics = ({ children }) => {
    const physicsRef = useRef([])

    return <>{
        Children.map(children, child => cloneElement(
            child,
            {
                ref: element => physicsRef.current.push({
                    ...element,
                    physics: {
                        type: child.props.type || 'ball',
                        velocity: child.props.config.startVelocity || { x: 0, y: 0 }
                    }
                })
            }
        ))
    }</>
}

export default Physics