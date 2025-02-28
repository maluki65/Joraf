import React from 'react';
import { cost, efficiency, efficient, leaf } from '../assets';


function Benefits() {
  return (
    <div className='benefitsSection' id='benefitsSection'>
      <h1>Why Choose Us?</h1>
      <p className='benefit' id='benefit'>
        Founded in the heart of <span>Kenya</span> and made for
        the <span>European</span> market, we are dedicated to 
        providing<br/> you with products that are;
      </p>
      <div className='benefitsContainer' id='benefitsContaier'>
        <div className='EcoContainer' id='Eco'>
          <img
            src={leaf}
            alt='Eco-friendly'
          />
          <div className='EcoText' id='EcoText'>
            <h2>
              Eco-friendly
            </h2>
            <p>
              Our products are sustainably sourced
              ensuring minimal environmental impact
              and promoting biodiversity.
            </p>
          </div>
        </div>

        <div className='EcoContainer' id='accelerate'>
          <img
            src={efficiency}
            alt='Eco-friendly'
          />
          <div className='EcoText' id='EcoText'>
            <h2>
              Accelerated manufacturing
            </h2>
            <p>
             Our products are crafted using advanced manufacturing 
             techniques,ensuring efficiency and faster delivery to 
             meet your demands
            </p>
          </div>
        </div>

        <div className='EcoContainer' id='prize'>
          <img
            src={cost}
            alt='Eco-friendly'
          />
          <div className='EcoText' id='EcoText'>
            <h2>
              Cost Effective
            </h2>
             <p>
              Our solutions combine unmatched affordability 
              with premium quality, offering you the best 
              value every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits