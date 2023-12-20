import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

export default function App() {
  return (
    <>
      {/* KEYBOARD CONTROLS */}
      {/* SOCKET MANAGER */}
      {/* CANVAS */}
      <Canvas camera={{
        position: [0, 6, 20],
        fov: 42
      }}>
        <Experience />
      </Canvas>
      {/* PHYSICS */}
      {/* MENU */}

    </>
  )
}
