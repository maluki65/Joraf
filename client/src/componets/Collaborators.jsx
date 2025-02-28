import React from 'react';
import { palm } from '../assets';

function Collaborators() {

  const ToFooter = () => {
    document.getElementById('footer-box').scrollIntoView ({ behavior: "smooth" });
  };
  return (
    <div className='colabSection' id='colabSection'>
      <div className='colabContent' id='colabContent'>
        <div className='colabText' id='colabText'>
          <h1>
            Ready To Collaborate?
          </h1>
          <p>
            Explore our range of coconut and avocado products 
            sourced  directly from kenya.
          </p>

          <div className='colabBtn' id='ColabBtn'>
            <button 
              onClick={ ToFooter }
              className='BtnSecondary'
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className='colabImg' id='colabImg'>
          <img
          src={palm}
          alt='Colaboration Image'
          />
        </div>

      </div>
    </div>
  )
}

export default Collaborators