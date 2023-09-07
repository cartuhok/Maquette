import React from "react"
import MoonLoader from "react-spinners/MoonLoader"


export default function Loading() {

   return (
    <div className="loadingContainer">
       <MoonLoader
        size={150}
        />
    </div>
   ) 
}