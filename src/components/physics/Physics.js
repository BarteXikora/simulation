import React, { useRef, Children, cloneElement } from 'react'

const Physics = ({ children }) => {
    const physicsRef = useRef([])

    console.log(Children.toArray(children))

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