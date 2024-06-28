import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css"
import { useState } from "react"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState(
        {
            city : "Delhi",
            feelsLike : 2.84,
            humidity : 21,
            temp : 39.4,
            tempMax : 39.4,
            tempMin : 39.4,
            weather : "Broken clouds",
        }
    )

    let updateInfo = (Newres)=>{
        setWeatherInfo(Newres);
    }
    return (
        <div className="weather">
            <h2>Weather App </h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox Info = {weatherInfo}/>
        </div>
    )
}