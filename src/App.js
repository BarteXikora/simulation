import React from 'react'
import { Canvas } from '@react-three/fiber'

import Physics from './components/physics/Physics'
import Dynamic from './components/physics/Dynamic'
import Static from './components/physics/Static'

import BackGround from './components/scene/BackGround'
import Ring from './components/scene/Ring'
import Ball from './components/scene/Ball'

import './style.css'

const App = () => {
  // Colors list:
  const colors = ['deepskyblue', 'dodgerblue', 'coral', 'yellow', 'orange', 'lime', 'magenta']

  // Generates random start positions and next colors of balls:
  let balls = []
  for (let i = 0; i < 28; i++) {
    balls.push({
      position: { x: Math.floor(Math.random() * 10 - 5) / 10, y: Math.floor(Math.random() * 10 - 5) / 10 },
      velocity: { x: Math.floor(Math.random() * 10 - 5) / 100, y: Math.floor(Math.random() * 10 - 5) / 100 },
      color: colors[i % colors.length]
    })
  }

  return (
    <Canvas>

      {/* Grid and viewfinder in the backgroud: */}
      <BackGround />

      <Physics gravity={{ x: 0, y: -3 }} airResistance={8} maxSpeed={{ x: 0.5, y: 0.5 }}>

        {/* Balls loop: */}
        {
          balls.map((ball, n) => <Dynamic
            key={n}
            type='ball'
            element={<Ball color={ball.color} />}
            config={{
              startPosition: ball.position,
              startVelocity: ball.velocity,
              radius: 0.1
            }}
          />)
        }

        {/* Static Ring */}
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