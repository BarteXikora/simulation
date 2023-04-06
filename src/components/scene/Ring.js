/*
    Ring Component
    Ring mesh.
*/

import React from 'react'

const Ring = () => {
    return <mesh>
        <ringGeometry args={[3, 3.1, 64]} />
        <meshBasicMaterial color={'white'} />
    </mesh>
}

export default Ring