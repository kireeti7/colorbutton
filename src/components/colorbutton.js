import { useState } from "react"

export default function ColorButton() {
    const [color, setColor] = useState("pink")

    console.log(color,"r");

    

    return (
        <div style={{  gap: "10px", marginTop: "10px" }}>
            <h2>it change's the color: {color} according to the button</h2>
            <button 
                onClick={() => setColor("Blue")}
                style={{ backgroundColor: "blue", color: "white", padding: "8px 16px", border: "none" }}
            >Blue</button>
            <button 
                onClick={() => setColor("Red")}
                style={{ backgroundColor: "red", color: "white" , padding: "8px 16px", border: "none" }}
            >Red</button>
            <button 
                onClick={() => setColor("Yellow")}
                style={{ backgroundColor: "yellow", color: "white", padding: "8px 16px", border: "none"  }}
            >Yellow</button>
            <button 
                onClick={() => setColor("Green")}
                style={{ backgroundColor: "green", color: "white" , padding: "8px 16px", border: "none"}}
            >Green</button>
            
        </div>
        
    )
}