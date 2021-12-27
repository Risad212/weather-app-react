import React, { useEffect, useState } from 'react';
import Display from '../displayData/Display';
import './Tempapp.css';

// https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey

const Tempapp = () => {
    const [userValue, setUserValue] = useState()

    const [apiValue , setApiValue] = useState([])

    function buttonHandle(){
        let userValue = document.getElementById('inputCity').value;
        if(userValue){
            setUserValue(userValue)
        }
        else{
            alert('please input city name');
            setUserValue('')
        }
    }

    useEffect(() =>{
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=usa&units=metric&appid=ba50a4ec255c0e7036508cb12d91e465`)
      .then(res => res.json())
      .then(data => setApiValue(data))
    },[])

    

    return (
        <div>
           <section className="Tempwrapper">
               <h2>Weather App</h2>
               <input type="text" placeholder='search city' id="inputCity" />
               <button onClick={buttonHandle}>Search</button>
               <div className="display-result">
                 <Display apiValue={apiValue}></Display>
               </div>
           </section>
        </div>
    );
};

export default Tempapp;