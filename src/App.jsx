import { Canvas, useFrame } from "@react-three/fiber"
import { Gltf, ScrollControls, useScroll, Scroll } from "@react-three/drei"
import { getProject, val } from "@theatre/core"
import flyThroughState from "./state.json"
import House from './House'
import ImageViewer from "react-simple-image-viewer"
import { useState, useCallback } from "react"


import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
  } from "@theatre/r3f"

//#D28D4B

export default function App() {
  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [camera, setCamera] = useState(true)

  const [isRoofMoved, setIsRoofMoved] = useState(false)


  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "./bed1.jpg",
    "./bed2.jpg",
    "./room1.jpg",
    "./bath.jpg"
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  

  const handleScroll = (position) => {
    setScrollPosition(position);
  };
  

    return ( <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={5} >
          <SheetProvider sheet={sheet}>
            <House onScrollChange={handleScroll} camera={camera} isRoofMoved={isRoofMoved} />
          </SheetProvider>
        </ScrollControls>
      </Canvas>

      {/* Logo */}
      <div className="logo-text">
        <a href="#" className="logo">
          <img src="logo.svg" />
        </a>
        <div className="right-items">

          {camera &&
            <a href="https://github.com/cartuhok/Maquette" target="_blank" className="button item2-btn">About</a>
          }
          
          {camera ? 
            <a href="https://carterrink.com/" target="_blank" className="button item3-btn">Contact</a> :
            <a href="#" className="button item2-btn" onClick={() => {
              setCamera(!camera)
              setIsRoofMoved(true)
            }}>X</a>
          }

        </div>
      </div>

    {/* Conditionally render the info-text div */}
    {scrollPosition < 0.07 ? (
      <div className="info-1">
        <span>THE</span>
        <h1>Farmsworth House</h1>
        <p>The Farnsworth House, brought to you by the fictitious FNM Architecture, highlights the use of advanced 3D live rendering techniques within an architectural context. The house, accompanying photos, and the entirety of the "FNM Architecture" brand, including its logo, are purely imaginative constructs. All assets are CC0.</p>
      </div>
    ) : null}

    {/* Conditionally render the info-text div */}
    {scrollPosition < 0.07 ? (
      <div className="scrollIconContainer">
      <div className="icon-scroll"></div>
      </div>
    ) : null}

      {/* Conditionally render the info-text div */}
      {scrollPosition > 0.07 && scrollPosition < 0.3 ? (
      <div className="info-2">
        <span>THE</span>
        <h1>Property</h1>
        <p>For this project, I used React Three Fiber and Theatre.js to handle the camera animations. I created the scene in Blender, using some kitbashed BlenderKit assets to achieve the desired look.</p>
        <p>Additionally, I explored a new baking method in Blender with the SimpleBake addon. This approach saved a good amount of time spent on the baking process.</p>
      </div>
    ) : null}

       {/* Conditionally render the info-text div */}
       {scrollPosition > 0.3 && scrollPosition < 0.98 ? (
       <div className="info-3">
        <h1>Open Kitchen</h1>
        <p>My dad is an architect. When I was little, he took me to his office one day and showed me one of the  models (also known as maquettes) he built. I was awestruck.  I remember peeking inside and imagining what it was like to be one of those little plastic people living in the world my dad meticulously crafted for them. This is my attempt at recreating that feeling in digital format.</p>
      </div>
    ) : null}

      {/* Conditionally render the info-text div */}
      {scrollPosition > 0.98 & camera ? ( 
      <>
        <div className="info-4">
          <span>THE</span>
          <h1>Floor Plan</h1>
          <p>Click on the numbers to see an actualized view of the rooms. The house is staged in a scandinavian rustic style. Furnishings seen in photos are available upon move in for an additional price.</p>
          <p>1. Main Bedroom</p>
          <p>2. Guest Bedroom</p>
          <p>3. Living Room</p>
          <p>4. Bathroom</p>
        </div>

        <div className="orbitBtn">
          <a href="#" className="button item2-btn" onClick={() => { 
            setCamera(!camera)
            setIsRoofMoved(false)
          }}>Explore Model</a>
        </div>
 
      </>
    ) : null}


      {/* Conditionally render the info-text div */}
      {scrollPosition > 0.98 & camera ? (  
          <div className="floorPlan">
          <div className="floorPlan-1" onClick={() => openImageViewer(0)}>1</div>
          <div className="floorPlan-2" onClick={() => openImageViewer(1)}>2</div>
          <div className="floorPlan-3" onClick={() => openImageViewer(2)}>3</div>
          <div className="floorPlan-4" onClick={() => openImageViewer(3)}>4</div>
          </div>
        ) : null}

      {isViewerOpen && (
        <ImageViewer
          className="modal"
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}

  
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollPosition * 100}%` }}></div>
      </div>
      <div className="scroll-percentage">DEMO {Math.round(scrollPosition * 100)}%</div>
    
    </>
  )
}