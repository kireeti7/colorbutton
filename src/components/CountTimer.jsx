import { useEffect, useState } from "react"

export default function CountTimer() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1)
        }, 1000) 
    },[timer])
    return (
        <div>
            <h2>the timer count is {timer}</h2>
        </div>
    )
}