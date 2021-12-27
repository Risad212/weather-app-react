import React from 'react';
import './Tempapp.css';


const Tempapp = () => {
    return (
        <div>
           <section className="Tempwrapper">
               <h2>Weather App</h2>
               <input type="text" placeholder='Please write city name & Enter' id="inputCity" />
               <button>Search</button>
           </section>
        </div>
    );
};

export default Tempapp;