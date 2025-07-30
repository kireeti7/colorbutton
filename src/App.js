import CarColor from "./components/CarColor"
import ColorButton from "./components/colorbutton"
import Count from "./components/Count"
import CountTimer from "./components/CountTimer"

export default function App() {
  return(
    <div>
      <ColorButton />
      <CarColor />
      <Count />
      <CountTimer />
    </div>
  )
}