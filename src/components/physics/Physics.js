import React, { useRef, Children, cloneElement } from 'react'

const Physics = ({ children }) => {
    const physicsRef = useRef([])

    return <>{
        Children.map(children, child => cloneElement(
            child,
            {
                ref: element => physicsRef.current.push(element)
            }
        ))
    }</>
}

export default Physics