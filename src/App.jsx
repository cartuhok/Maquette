import { Canvas, useFrame } from "@react-three/fiber"
import { Gltf, ScrollControls, useScroll } from "@react-three/drei"
import { getProject, val } from "@theatre/core"
import House from './House'

import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
  } from "@theatre/r3f";

//#D28D4B

export default function App() {
    const sheet = getProject("Fly Through").sheet("Scene")

    return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <House />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
}