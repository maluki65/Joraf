import React from 'react';
import { oil, avocado, pellets, hibiscus, home2, cert} from '../assets';


function Products() {
  return (
    <section className='productSection' id='productSection'>
      <p className='move'>Natural</p>
      <div className='productContainer' id='productContainer'>
        <div className='producttext' id='producttext'>
          <h1 className='autoshow'>
            Showcase of our Products
          </h1>
          <a>
           &rarr;
          </a>
        </div>

        <div className='card1' id='coconutOil'>
          <img src={oil} alt='coconut oil'/>
          <div className='imgtext' id='imgtext'>
            <p>Coconut Oil</p>
          </div>
        </div>

        <div className='card1' id='coconutWater'>
          <img src={home2} alt='Coconut Water'/>
          <div className='imgtext' id='imgtext'>
            <p>Coconut Water</p>
          </div>
        </div>
      </div>
      <div className='product2'>
        <div className='card' id='pellets'>
          <img src={pellets} alt='Coconut Pellets'/>
          <div className='imgtext' id='imgtext'>
            <p>Coconut Heating pellets</p>
          </div>
        </div>

        <div className='card' id='avocado'>
          <img src={avocado} alt='Avocado Oil'/>
          <div className='imgtext' id='imgtext'>
            <p>Avocado Oil</p>
          </div>
        </div>

        <div className='card' id='hibiscus&'>
          <img src={hibiscus} alt='hibiscus & ginger juice'/>
          <div className='imgtext' id='imgtext'>
            <p>Hibiscus & Ginger Juice</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className='certified' id='certified'>
        <h2 className='autoshow'>We're <span className='certhigh'> certified!</span></h2>
          <div className='certifiedLink' id='cerfitiedLink'>
            <img src={cert} alt='cert'/>
            <p>
              Joraf Enterprise is <br/>
              <span>
                <a
                  href='/'
                  className='viewcert'
                  id='viewcert'
                 >
                  KIRDI certified
                </a>
              </span>
            </p> 
          </div>
        </div>
    </section>
  )
}

export default Products