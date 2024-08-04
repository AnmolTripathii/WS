import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar'
import Page1 from './Component/page1/Page1'
import Highlight from './Component/Highlight'
import Career from './Component/Career'
import Certificate from './Component/Certificate'
import Curriculum from './Component/Curriculum'
import Book_Classes from './Component/Book_Classes'
import Cta from './Component/Cta'
import FAQ from './Component/FAQ'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Page1/>
    <Highlight/>
    <Career/>
    <Certificate/>
    <Curriculum/>
    < Book_Classes/>
    <Cta/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App