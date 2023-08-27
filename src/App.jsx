import { Canvas, useFrame } from "@react-three/fiber"
import { Gltf, ScrollControls, useScroll, Scroll } from "@react-three/drei"
import { getProject, val } from "@theatre/core"
import flyThroughState from "./state.json"
import House from './House'
import { useState } from "react"


import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
  } from "@theatre/r3f"

//#D28D4B

export default function App() {
  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene")
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (position) => {
    setScrollPosition(position);
  };

    return ( <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={5} >
          <SheetProvider sheet={sheet}>
            <House onScrollChange={handleScroll} />
          </SheetProvider>
        </ScrollControls>
      </Canvas>

      {/* Logo */}
      <div className="logo-text">
        <a href="#" className="logo">
          <img src="logo.svg" />
        </a>
        <div className="right-items">
          <a href="#" className="button item2-btn">Item 2</a>
          <a href="#" className="button item3-btn">Item 3</a>
        </div>
      </div>

    {/* Conditionally render the info-text div */}
    {scrollPosition < 0.07 ? (
      <div className="info-1">
        <span>THE</span>
        <h1>Farmsworth House</h1>
        <p>My dad is an architect. When I was little, he took me to his office one day and showed me one of the  models (also known as maquettes) he built. I was awestruck.  I remember peeking inside and imagining what it was like to be one of those little plastic people living in the world my dad meticulously crafted for them. This is my attempt at recreating that feeling in digital format.</p>
      </div>
    ) : null}

      {/* Conditionally render the info-text div */}
      {scrollPosition > 0.07 && scrollPosition < 0.3 ? (
      <div className="info-2">
        <span>THE</span>
        <h1>Property</h1>
        <p>This project was made using React Three Fiber and Theatre.js for the camera animation.  I made the scene in Blender with kitbashed BlenderKiit assets.  I also tried a new baking technique in Blender with the SimpleBake addon that made the UV unwrapping and baking process less time consuming.</p>
        <p>This project was made using React Three Fiber and Theatre.js for the camera animation.  I made the scene in Blender with kitbashed BlenderKiit assets.</p>
      </div>
    ) : null}

       {/* Conditionally render the info-text div */}
       {scrollPosition > 0.3 && scrollPosition < 0.8 ? (
       <div className="info-3">
        <h1>Open Kitchen</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor repellat mollitia excepturi omnis eaque deserunt iusto aperiam rem laudantium, eos tenetur, temporibus qui cupiditate? Perspiciatis nihil autem error consectetur dicta.</p>
      </div>
    ) : null}

      {/* Conditionally render the info-text div */}
      {scrollPosition > 0.8 ? (
      <div className="info-4">
        <span>THE</span>
        <h1>Floor Plan</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor repellat mollitia excepturi omnis eaque deserunt iusto aperiam rem laudantium, eos tenetur, temporibus qui cupiditate? Perspiciatis nihil autem error consectetur dicta.</p>
      </div>
    ) : null}

    
    </>
  )
}