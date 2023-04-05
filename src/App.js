import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'
import Dynamic from './components/physics/Dynamic'

import './style.css'

const App = () => {
  return (
    <Canvas>
      <color args={[0, 0, 0]} attach={'background'} />

      <Physics>
        <Dynamic element={<mesh><sphereGeometry /></mesh>} />
      </Physics>
    </Canvas>
  )
}

export default App