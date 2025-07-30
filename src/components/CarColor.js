import { useState } from "react"

export default function CarColor() {

    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'mustang',
        color: 'red',
        year: 1955
    });

    const UpdateCar = () => {
        setCar(prestate => {
            return {...prestate, color: 'blue'}
        });
    }
    
    return (
        <div>
            <h1>my {car.brand}</h1>
            <p>
                its a {car.model} {car.color} from {car.year}.
            </p>
            <button onClick={UpdateCar}>Blue</button>
        </div>
    )
}