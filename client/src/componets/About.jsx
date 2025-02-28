import React from 'react';
import { green } from '../assets';

function About() {
  return (
    <section className='aboutSection' id='aboutSection'>
      <div className='aboutContainer' id='aboutContainer'>
        <div className='aboutImg' id='aboutImg'>
          <img 
            src={green}
            alt='About Image'
          />
        </div>
        
        <div className='aboutDetails' id='aboutDetails'>
          <p className='para'>About Us</p>
          <div className='aboutTitle' id='aboutTitle'>
            <h1>
              Who We Are
            </h1>
            <p className='autoshow'>
              We are dedicatd to providing eco-friendly products sourced
              from kenya, ensuring minimal environmental impact. Our
              commitment to sustainability drives every aspect of Our
              business, from sourcing to processing and shipping.
            </p>
          </div>
          <div className='detailsContainer' id='detailContiner'>

            <div className='mission' id='mission'>
              <h1>
                Our Mission
              </h1>
              <p>
                To offer high-quality coconut-based products while 
                promoting sustainability and environmental
                consciousness.
              </p>
            </div>

            <div className='vision' id='vision'>
              <h1>
                Our Vision
              </h1>
              <p>
              To become a leading provider of coconut products
              globally, offering customer natural and healthy 
              alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About