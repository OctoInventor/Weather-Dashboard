import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


export const TempAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-6 text-xl text-cyan-300">
        <p>Rain</p>
      </div>

      <div className="flex flex-row items center justifybetween py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"></img>
      </div>
    </div>
  )
}

export default TempAndDetails