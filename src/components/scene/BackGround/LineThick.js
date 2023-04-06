/*
    LineThick Component
    A thick light blue line. Placed always in center, recives rotation in Z axis as a prop.
*/

import React from 'react'

const LineThick = ({ rotationZ = 0 }) => {
    return (
        <mesh position={[0, 0, -1]} rotation={[0, 0, rotationZ]}>
            <cylinderGeometry args={[0.01, 0.01, 30, 3]} />
            <meshBasicMaterial color={'deepskyblue'} />
        </mesh>
    )
}

export default LineThick