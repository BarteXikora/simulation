import React from 'react'

const Ball = ({ color }) => {
    return <mesh>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color={color} />
    </mesh>
}

export default Ball