import './App.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.05,
            far: 10,
            position: [ 1, 2, 6 ]
        } }
    >
        <App />
    </Canvas>
)