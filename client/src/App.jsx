import { useState } from 'react'
import './App.css'
import { About, Benefits, Collaborators, Footer, Hero, Navbar, Products,Team } from './componets'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Benefits/>
      <Collaborators/>
      {/*<Team/>*/}
      <Footer/>
    </>
  )
}

export default App
