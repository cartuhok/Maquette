/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture, ScrollControls, useScroll } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import { getProject, val } from "@theatre/core";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

export default function House(props) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const { nodes, materials } = useGLTF("/modelHouse.glb");

  // our callback will run on every animation frame
  useFrame(() => {
  // the length of our sequence
  const sequenceLength = val(sheet.sequence.pointer.length);
  // update the "position" of the playhead in the sequence, as a fraction of its whole length
  sheet.sequence.position = scroll.offset * sequenceLength;
});

const bgColor = "#0f0f0f";


  const textures = useMemo(() => {[
    useLoader(TextureLoader, "./leather.png"),
    useLoader(TextureLoader, "./light.png"),
  ]}, [])

  const leather = useTexture("./leather.png")
  const light = useTexture("./light.png")


  return (
  <>
    <color attach="background" args={[bgColor]} />
    {/* <fog attach="fog" color={bgColor} near={0.05} far={100} /> */}
    <ambientLight intensity={1} />

    <group {...props} dispose={null}>
      <mesh
        name="fig0029"
        geometry={nodes.fig0029.geometry}
        // material={materials["Plastic.001"]}
        position={[4.748, 3.915, 4.716]}
        rotation={[Math.PI, -0.75, Math.PI]}
      >
        <meshMatcapMaterial matcap={leather} />
      </mesh>
      <mesh
        name="fig0010"
        geometry={nodes.fig0010.geometry}
        material={materials["Plastic.001"]}
        position={[3.26, 3.902, 5.563]}
        rotation={[0, 0.349, 0]}
      >
        <meshMatcapMaterial matcap={leather} />
      </mesh>
      <mesh
        name="fig0025"
        geometry={nodes.fig0025.geometry}
        material={materials["Plastic.001"]}
        position={[-9.654, 3.907, -8.598]}
        rotation={[Math.PI, -0.068, Math.PI]}
      >
        <meshMatcapMaterial matcap={leather} />
      </mesh>
      <mesh
        name="fig0025001"
        geometry={nodes.fig0025001.geometry}
        material={materials["Plastic.001"]}
        position={[-0.109, 3.879, -1.07]}
        rotation={[0, 1.178, 0]}
      >
        <meshMatcapMaterial matcap={light} />
      </mesh>
      <mesh
        name="snowholder"
        geometry={nodes.snowholder.geometry}
        material={materials["Plastic.001"]}
        position={[7.172, 9.717, -6.696]}
      />
      <mesh
        name="drainpipe_holder"
        geometry={nodes.drainpipe_holder.geometry}
        material={materials["Plastic.001"]}
        position={[7.895, 8.641, 6.832]}
      />
      <mesh
        name="drainpipe"
        geometry={nodes.drainpipe.geometry}
        material={materials["Plastic.001"]}
        position={[7.912, 8.689, -6.696]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="snowholder_mount"
        geometry={nodes.snowholder_mount.geometry}
        material={materials["Plastic.001"]}
        position={[7.22, 9.73, 5.652]}
      />
      <group
        name="Ruler"
        position={[9.443, 1.08, 21.769]}
        rotation={[0, -0.734, 0]}
      >
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials["Ruler White.001"]}
        />
        <mesh
          name="Plane009_1"
          geometry={nodes.Plane009_1.geometry}
          material={materials["Ruler Red.001"]}
        />
        <mesh
          name="Plane009_2"
          geometry={nodes.Plane009_2.geometry}
          material={materials["Ruler Green.001"]}
        />
        <mesh
          name="Plane009_3"
          geometry={nodes.Plane009_3.geometry}
          material={materials["1-250.001"]}
        />
        <mesh
          name="Plane009_4"
          geometry={nodes.Plane009_4.geometry}
          material={materials["1-300.001"]}
        />
        <mesh
          name="Plane009_5"
          geometry={nodes.Plane009_5.geometry}
          material={materials["1-200.001"]}
        />
        <mesh
          name="Plane009_6"
          geometry={nodes.Plane009_6.geometry}
          material={materials["1-100.001"]}
        />
        <mesh
          name="Plane009_7"
          geometry={nodes.Plane009_7.geometry}
          material={materials["1-500.001"]}
        />
        <mesh
          name="Plane009_8"
          geometry={nodes.Plane009_8.geometry}
          material={materials["1-400.001"]}
        />
      </group>
      <mesh
        name="Faber_Castell_Pencil005"
        geometry={nodes.Faber_Castell_Pencil005.geometry}
        material={materials["Pencil.005"]}
        position={[-7.736, 1.293, 21.389]}
      />
      <mesh
        name="Floor_Baked"
        geometry={nodes.Floor_Baked.geometry}
        material={materials.Floor_Baked}
        position={[0, 0.905, 3.343]}
      />
      <mesh
        name="Base_Baked"
        geometry={nodes.Base_Baked.geometry}
        material={materials.Base_Baked}
        position={[12.846, 3.002, 3.336]}
      />
      <mesh
        name="Walls_Baked"
        geometry={nodes.Walls_Baked.geometry}
        material={materials.Walls_Baked}
        position={[-7.756, 5.66, -8.222]}
        rotation={[-Math.PI, -1.571, 0]}
      />
      <mesh
        name="roof_Baked"
        geometry={nodes.roof_Baked.geometry}
        material={materials.roof_Baked}
        position={[0, 8.795, -6.696]}
      />
      <mesh
        name="Furniture_Baked"
        geometry={nodes.Furniture_Baked.geometry}
        material={materials.Furniture_Baked}
        position={[-3.814, 3.867, -0.751]}
      />
      </group>
       <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={45}
        near={0.1}
        far={500}
      />
    </>
  )
}

useGLTF.preload("/modelHouse.glb");
