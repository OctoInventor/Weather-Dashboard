import { useState } from "react"; 
import { BiSearch } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";

export const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })   
    }
  }

  return (
    <div className="flex flex-row justify-center my-6"> 
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)} 
        type="text"
        placeholder="search for city..."
        className="text-gray-500 text-xl font-light p-2 w-full shadow-xl 
        capitalize focus:outline-none placeholder:lowercase"
        />

        <BiSearch 
        size={30} 
        className="cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
        />
        <BiCurrentLocation 
        size={30} 
        className="cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}
        />
    </div>

    <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text=4xl font=medium transition ease-out hover:scale-125"
        onClick={() => setUnits("metric")}
        >
            <span>&deg;C</span>
        </button>
        <p className="text-xl font=medium mx-1">|</p>
        <button className="text=4xl font=medium transition ease-out hover:scale-125"
        onClick={() => setUnits("imperial")}
        >
            <span>&deg;F</span>
        </button>
    </div>

    </div>
  )
}

export default Inputs;