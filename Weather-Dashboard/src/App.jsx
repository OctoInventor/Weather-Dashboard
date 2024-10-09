import { Inputs } from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import { TopBottons } from "./components/TopBottons";


const App = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br
    shadow-xl from-cyan-600 to-blue-700">
    <TopBottons />
    <Inputs />

    <TimeAndLocation />
    <TempAndDetails />
    </div>
  )
}

export default App