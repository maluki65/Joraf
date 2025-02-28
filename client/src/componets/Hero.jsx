import React from 'react'
import { homeImg, home2, home3 } from '../assets';

function Hero() {
  
  const Explore = () => {
    document.getElementById('aboutSection').scrollIntoView ({ behavior: "smooth" });
  };

  return (
    <section className='HeroSection' id='HeroSection'>
      <div className='heroContainer' id='heroContainer'>
        <div className='herotext' id='herotext'>
          <h1 className='autoshow'>
            Savor Nature's Goodness with Every Sip
          </h1>
          <p>
           Discover our range of eco-friendly coconut and
           avocado product sourced from kenya. Join us in
           promoting a healthier planet while enjoying the 
           purest flavor.
          </p>
          <div className='heroBtn' id='heroBtn'>
            <button onClick={ Explore } className='herobtn' id='btnHero'>
              EXPLORE MORE &rarr;
            </button>
          </div>
        </div>
        <div className='heroImg' id='heroImg'>
          <img src={homeImg} alt='Home Image'/>
        </div>
      </div>
    </section>
  )
}

export default Hero