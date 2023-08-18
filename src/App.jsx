import { OrbitControls } from '@react-three/drei'

export default function App()
{
    return <>

        <OrbitControls makeDefault />

        <mesh scale={ 1.5 }>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}