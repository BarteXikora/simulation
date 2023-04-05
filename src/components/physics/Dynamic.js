/*
    Dynamic Component
    Parent for singular 'visual' object. Gets ref from Physics component and applays it to group.
*/

import React from 'react'

const Dynamic = React.forwardRef(({ type, element, config }, ref) => {
    return <group ref={ref} >{element}</group>
})

Dynamic.physicsType = 'dynamic'

export default Dynamic