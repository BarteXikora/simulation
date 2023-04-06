import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'
import Dynamic from './components/physics/Dynamic'
import Static from './components/physics/Static'

import Ring from './components/scene/Ring'

import './style.css'

const App = () => {
  return (
    <Canvas>
      <color args={[0, 0, 0]} attach={'background'} />

      <Physics gravity={{ x: 0, y: -3 }} airResistance={8} maxSpeed={{ x: 0.5, y: 0.5 }}>
        <Dynamic
          type='ball'
          element={<mesh>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color={'red'} />
          </mesh>}
          config={{ startPosition: { x: 0, y: 0 }, mass: 1, startVelocity: { x: 0.01, y: 0 }, radius: 0.1 }}
        />

        <Dynamic
          type='ball'
          element={<mesh>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color={'blue'} />
          </mesh>}
          config={{ startPosition: { x: 0, y: 0 }, startVelocity: { x: 0, y: 0 }, radius: 0.1 }}
        />

        <Static
          type='ring'
          element={<Ring />}
          config={{
            startPosition: { x: 0, y: 0 },
            radius: 3
          }}
        />
      </Physics>
    </Canvas>
  )
}

export default App