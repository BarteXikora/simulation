import React, { useRef, Children, cloneElement } from 'react'

const Physics = ({ children }) => {
    const physicsRef = useRef([])

    console.log(children)

    return <>{
        Children.map(children, child => cloneElement(
            child,
            {
                ref: element => physicsRef.current.push({
                    ...element,
                    physics: {
                        type: child.props.type || 'ball',
                        velocity: child.props.config ? child.props.config.startVelocity || { x: 0, y: 0 } : { x: 0, y: 0 }
                    }
                })
            }
        ))
    }</>
}

export default Physics