import React from 'react';
import { joyce, jim, victoria, alex } from '../assets';

const Team = () =>{
  return (
    <div className='TeamSection' id='TeamSection'>
        <div className='Ttitle' id='Ttitle'>
            <h3>Meet</h3>
            <h1 className='autoshow'>Our Team</h1>
            <p>Passionate individuals dedicated 
               to sutainable practices.
            </p>
        </div>
        <div className='TeamContainer' id='TeamContainer'>
            <div className='TeamCard' id='TeamCard'>
                <img
                  src={joyce}
                  alt='Joyce'
                />

                <div className='teamText' id='teamText'>
                    <h2>
                        Joyce Ntelelek Lekuton
                    </h2>
                    <p>Founder | CEO</p>
                </div>
            </div>
            <div className='TeamCard' id='TeamCard'>
                <img
                  src={victoria}
                  alt='Victoria'
                />

                <div className='teamText' id='teamText'>
                    <h2>
                        Victoria Lepati
                    </h2>
                    <p>Operations Manager</p>
                </div>
            </div>
            <div className='TeamCard' id='TeamCard'>
                <img
                  src={alex}
                  alt='Alex'
                />

                <div className='teamText' id='teamText'>
                    <h2>
                        Alex N Mathenge
                    </h2>
                    <p>Business Developer</p>
                </div>
            </div>
            <div className='TeamCard' id='TeamCard'>
                <img
                  src={jim}
                  alt='Jim'
                />

                <div className='teamText' id='teamText'>
                    <h2>
                        Samuel Okoth
                    </h2>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Team;
