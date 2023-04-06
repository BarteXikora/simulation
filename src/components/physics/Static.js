/*
    Static Component
    Parent for singular 'visual' object. Gets ref from Physics component and applays it to group.
*/

import React from 'react'

const Static = React.forwardRef(({ element, config }, ref) => {

    // Gets start position from config prop:
    const startPositionConfig = config.startPosition || { x: 0, y: 0 }
    const startPosition = [startPositionConfig.x, startPositionConfig.y, 0]

    return <group
        ref={ref}
        position={startPosition}
    >
        {element}
    </group>
})

Static.physicsType = 'static'

export default Static