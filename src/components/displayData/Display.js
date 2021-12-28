import React from 'react';
import './Display.css'


const Display = (props) => {
//    const {main} = props.city
   console.log(props.city)
   


    return (
        <>
           <section className='weatherDisplay'>
            <h3>name</h3>
             <h4>51°C</h4>
             <div className='wrapper'>
              <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
              <h4 class="description">hello</h4>
           </div>
             <p className='humidity'>Humidity: 60%</p>
              <p className='wind'>Wind speed: 6.2 km/h</p>
           </section>
        </>
    );
};

export default Display;