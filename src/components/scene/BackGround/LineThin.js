/*
    LineThin Component
    A thin dark gray line. Recives x and y position and z rotation as a prop.
*/

import React from 'react'

const LineThin = ({ rotationZ = 0, positionX = 0, positionY = 0 }) => {
    return (
        <mesh position={[positionX, positionY, -1]} rotation={[0, 0, rotationZ]}>
            <cylinderGeometry args={[0.005, 0.005, 30, 3]} />
            <meshBasicMaterial color={'#404040'} />
        </mesh>
    )
}

export default LineThin