import React, { useEffect, useState } from 'react';
import Display from '../displayData/Display';
import NotFound from '../NotFound/NotFound';
import './Tempapp.css';

// https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey

const Tempapp = () => {
    const [city, setCity] = useState()
    const [search , setSearch] = useState('Dhaka')

    function searchBtn(){
      let userValue = document.getElementById('inputCity').value;
      setSearch(userValue)
    }

    useEffect(() =>{
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba50a4ec255c0e7036508cb12d91e465`)
      .then(res => res.json())
      .then(data => setCity(data))
    },[]);

    return (
        <div>
           <section className="Tempwrapper">
               <h2>Search City</h2>
               <input type="text" placeholder='search city' id="inputCity" />
               <button onClick={searchBtn}>Search</button>
                {
                  !city ? (
                    <NotFound></NotFound>
                  ): (
                    <Display city={city}></Display>
                  )
                }
           </section>
        </div>
    );
};

export default Tempapp;