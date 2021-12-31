import React, { useEffect, useState } from 'react';
import './Tempapp.css';

//`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba50a4ec255c0e7036508cb12d91e465`

// document.body.style.backgroundImage =
// `url('https://source.unsplash.com/1600x900/? ${city Name}')`


const Tempapp = () => {
    const [city, setCity] = useState([])
    const [search , setSearch] = useState('new york')

    function searchBtn(){
      let userValue = document.getElementById('inputCity').value;
      setSearch(userValue)
    }

    useEffect(() =>{
     const fetchApi = async () => {
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba50a4ec255c0e7036508cb12d91e465`;
       const response = await fetch(url)
       const resJson = await response.json()
       setCity(resJson)
     }
    fetchApi()
    },[]);
    
    
   document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${city.name}')`
    
    return (
        <div>
           <section className="Tempwrapper">
               <h2>Search City</h2>
               <input type="text" placeholder='search city' id="inputCity" />
               <button onClick={searchBtn}>Search</button>
                {/* display data  */}
                <section className='weatherDisplay'>
                  <h3>{city.name}</h3>
                  <h4>{`${city.main.temp} °C`}</h4>
                  <div className='wrapper'>
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="" class="icon" />
                    <h4 class="description">{city.weather[0].description}</h4>
                </div>
                  <p className='humidity'>{`Humidity ${city.main.humidity}%`}</p>
                    <p className='wind'>{`Wind speed ${city.wind.speed} km/h`}</p>
                </section>
           </section>
        </div>
    );
};

export default Tempapp;