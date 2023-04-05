import React from 'react'

const Dynamic = React.forwardRef(({ type, element, config }, ref) => {
    return <group ref={ref} >{element}</group>
})

export default Dynamic