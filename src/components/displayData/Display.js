import React from 'react';
import './Display.css'


const Display = (props) => {
   const {name, main,wind} = props.city
   const {icon, description} = props.city.weather[0]

  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

   
    return (
        <>
           <section className='weatherDisplay'>
            <h3>{name}</h3>
             <h4>{`${main.temp} °C`}</h4>
             <div className='wrapper'>
              <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" class="icon" />
              <h4 class="description">{description}</h4>
           </div>
             <p className='humidity'>{`humidity ${main.humidity}%`}</p>
              <p className='wind'>{`Wind speed: ${wind.deg} km/h`}</p>
           </section>
        </>
    );
};

export default Display;