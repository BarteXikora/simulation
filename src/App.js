import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'
import Dynamic from './components/physics/Dynamic'

import './style.css'

const App = () => {
  return (
    <Canvas>
      <color args={[0, 0, 0]} attach={'background'} />

      <Physics gravity={{ x: 0, y: 0 }} airResistance={8}>
        <Dynamic
          type='ball'
          element={<mesh>
            <sphereGeometry args={[0.2]} />
            <meshBasicMaterial color={'red'} />
          </mesh>}
          config={{ startPosition: { x: 1, y: 0 }, startVelocity: { x: -0.005, y: 0 }, radius: 0.2 }}
        />

        <Dynamic
          type='ball'
          element={<mesh>
            <sphereGeometry args={[0.2]} />
            <meshBasicMaterial color={'blue'} />
          </mesh>}
          config={{ startPosition: { x: 0, y: -0.75 }, startVelocity: { x: 0.02, y: 0.02 }, radius: 0.2 }}
        />
      </Physics>
    </Canvas>
  )
}

export default App