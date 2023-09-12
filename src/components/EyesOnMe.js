// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handlerFocus(e){
        console.log("Good!")
    }
    
    function handlerBlur(e){
        console.log("Hey! Eyes on me!")
    }

    return (
        <button onFocus={handlerFocus} onBlur={handlerBlur}>Eyes on me</button>
    )
}

export default EyesOnMe