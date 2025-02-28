import React from 'react'

function Popup({closeModal}) {
  return (
    <div className='ModalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button
                    onClick={() => {
                            closeModal(false)
                        }}
                 >
                    X
                </button>
            </div>
            
            <div className='titlepop'>
                <h1> Certificates</h1>
            </div>

            <div className='body'>
                <p>
                    next page
                </p>
            </div>

            <div className='popfoot'>
                <button
                  id='canceleBtn'
                  onClick={() => {
                    closeModal(false)
                  }}
                  > cancel
                </button>
                <button>continue</button>
            </div>
        </div>
    </div>
  )
}

export default Popup