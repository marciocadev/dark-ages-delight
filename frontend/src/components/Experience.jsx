import { Environment } from "@react-three/drei"
import { Map } from "./models/Map"
import { OrbitControls } from '@react-three/drei'

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Map />
      <Environment preset="sunset" />
    </>
  )
}