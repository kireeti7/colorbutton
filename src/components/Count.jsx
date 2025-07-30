import { useEffect, useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("the count is :", count)
    }, [count]);

    return (
        <div>
            <h2>the count is: {count}</h2>
            <button onClick={() => setCount (count + 1)}>Increment</button>
            {
                console.log(count)
            }
            <button onClick={() => setCount (count - 1)}>Decrement</button>
        </div>

    );
}