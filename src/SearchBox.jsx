import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function SearchBox({updateInfo}){

    const API_URL = "https://api.openweathermap.org/data/2.5/weather" // https://openweathermap.org/current
    const API_KEY = "ed98e3769d5f56ae777d02c49a15404d"

    let [City,SetCity] = useState("");
    let [error,SetError] = useState(false);

    let getWeatherInfo = async ()=> {
        // eslint-disable-next-line no-useless-catch
        try
        {
            let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : City,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feelsLike,
                weather : jsonResponse.weather[0].description,
            }

            return result;
        }
        catch(err){
            throw err;
        }
    }


    let handleChange = (event)=>{
        SetCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(City);
            SetCity("");
            let Newres = await getWeatherInfo();
            updateInfo(Newres);
        }catch(err){
            SetError(true)
        }
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
                id="City" 
                label="City Name" 
                variant="outlined" 
                required 
                value={City}
                onChange={handleChange}
            />
            <br /><br />
            <Button variant="contained" type='submit'>search</Button>            
            </form>

            <p style={{color: "red"}}><b>{error && "No such place exist!"}</b></p>
        </div>
    )
}