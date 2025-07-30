import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>the count is: {count}</h2>
            <button onClick={() => setCount (count + 1)}>Increment</button>
            <button onClick={() => setCount (count - 1)}>Decrement</button>
        </div>
    );
}