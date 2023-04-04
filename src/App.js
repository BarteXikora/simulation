import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'

import './style.css'

const App = () => {
  return (
    <Canvas>
      <color args={[0, 0, 0]} attach={'background'} />
    </Canvas>
  )
}

export default App