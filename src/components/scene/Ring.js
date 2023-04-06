import React from 'react'
import Static from '../physics/Static'

const Ring = () => {
    return <Static
        type='ring'
        element={(
            <mesh>
                <ringGeometry args={[3, 3.1, 64]} />
            </mesh>
        )}
        config={{
            startPosition: { x: 0, y: 0 },
            radius: 3
        }}
    />
}

export default Ring