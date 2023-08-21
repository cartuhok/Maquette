import { OrbitControls } from '@react-three/drei'
import House from './House'

//#D28D4B

export default function App()
{
    return <>

        <ambientLight intensity={1} />
        
        <OrbitControls makeDefault />

        <House scale={0.1}/>

    </>
}