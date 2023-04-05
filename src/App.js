import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'
import Dynamic from './components/physics/Dynamic'

import './style.css'

const App = () => {
  return (
    <Canvas>
      <color args={[0, 0, 0]} attach={'background'} />

      <Physics gravity={{ x: 0, y: -10 }} airResistance={8}>
        <Dynamic type='ball' element={<mesh><sphereGeometry /></mesh>} config={{ startPosition: { x: 3, y: 0 } }} />
      </Physics>
    </Canvas>
  )
}

export default App