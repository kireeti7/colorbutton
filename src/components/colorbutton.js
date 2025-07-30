import { useState } from "react"

export default function ColorButton() {
    const [color, setColor] = useState("pink")

    console.log(color,"r");

    

    return (
        <div id="colorbutton">
            <h2>it change's the color: {color} according to the button</h2>
            <button 
                onClick={() => setColor("Blue")}
                style={{ backgroundColor: "blue", color: "white" }}
            >Blue</button>
            <button 
                onClick={() => setColor("Red")}
                style={{ backgroundColor: "red", color: "white" }}
            >Red</button>
            <button 
                onClick={() => setColor("Yellow")}
                style={{ backgroundColor: "yellow", color: "white" }}
            >Yellow</button>
            <button 
                onClick={() => setColor("Green")}
                style={{ backgroundColor: "green", color: "white" }}
            >Green</button>
            
        </div>
        
    )
}