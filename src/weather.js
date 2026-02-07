import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")
   //const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    function handleweather(evt)
    {
        setcity(evt.target.value)
    }
    function getweather()
    {
       const weatherdata= axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7fca0b1541b21b4d8497ee158344568e`)
       weatherdata.then(function(success){
         console.log(success.data)
         setweather(success.data.weather[0].main)
         settemp(success.data.main.temp)
         setdesc(success.data.weather[0].description)

    })
   
    }
    
    

    return (
        <div className=" bg-black p-20">
        <div className="p-10 pt-4 bg-green-500 flex flex-col ">
            <p className="text-2xl font-bold">Weather Report</p>
            <p>I can give you a weather report about your city</p>
           
            <input onChange={handleweather} type="text" placeholder="Enter city name" className="w-48 mt-4 p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"></input>
           
            <button onClick={getweather} className=" w-28 bg-black text-white py-2 rounded-md transition">Get Report</button>
            <div className="mt-4 text-left">

                <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Weather :{weather}</span>
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Temperature :{temp}</span>
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Description :{desc}</span>
                </p>
            </div>
        </div>
        </div>
    )


}
export default Weather