import { useState } from "react"

export default function ColorButton() {
    const [color, setColor] = useState("pink")

    console.log(color);
    return (
        <div id="colorbutton">
            <h2>it change's the color: {color} according to the button</h2>
            <button type="button" onClick={() => (setColor("Blue"))}>Blue</button>
            <button onClick={() => (setColor("red"))}>Red</button>
            <button onClick={() => (setColor("yellow"))}>Yellow</button>
            <button onClick={() => (setColor("green"))}>Green</button>
        </div>
        
    )
}