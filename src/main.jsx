// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
import React, { Suspense } from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import Loading from "./Loading"
import './App.css'

// studio.extend(extension)
// studio.initialize()


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </React.StrictMode>
  )