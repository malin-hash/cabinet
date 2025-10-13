import React from 'react'
import {Element} from "react-scroll"
import HomePage from '../Components/UserComponents/HomePage'
import Services from '../Components/UserComponents/Services'
import Header from '../Components/UserComponents/Header'
import Price from '../Components/UserComponents/Price'
import ExpertEquipe from '../Components/UserComponents/ExpertEquipe'
import Maquete from '../Components/UserComponents/Maquete'
import Projects from '../Components/UserComponents/Projects'
import Grille from '../Components/UserComponents/Grille'
import SideBar from '../Components/UserComponents/SideBar'
import Rubon from '../Components/UserComponents/Rubon'
import Guide from '../Components/UserComponents/Guide'
import Faq from '../Components/UserComponents/Faq'
import Rdv from '../Components/UserComponents/Rdv'
import Contact from '../Components/UserComponents/Contact'
import Footer from '../Components/UserComponents/Footer'

export default function UserInterface() {
    // const close = () => setOpen(!open);
  return (
    <div>
        <Header/>
        {/* All Components from UserComponents */}
        {/* HomePage */}
        {/* <SideBar close={() => setOpen(!open)}/> */}
    <section className='md:mt-14 mt-10 '>
        <Element
        name="acceuil"
        className=""
        >
            <HomePage/>
        </Element>
        <Element
        name="services"
        className="mt-6"
        >
            <Services/>
        </Element>
        <Element
        name="compétences"
        className=""
        >
            <ExpertEquipe/>
        </Element>
        {/* Maquette */}
        <div className='px-6 mb-10'>
            <Maquete/>
        </div>
        <Element
        name="tarif"
        className=""
        >
            <Price/>
        </Element>
        <div >
            <Grille/>
        </div>
        <Element
        name="projets"
        >
            <Projects/>
        </Element>
        <div>
            <Rubon/>
        </div>
         <Element
        name="guide"
        >
            <Guide/>
        </Element>
        <Element
        name="faq"
        >
            <Faq/>
        </Element>
        <Element
        name="rdv"
        >
            <Rdv/>
        </Element>
        <Element
        name="contact"
        >
            <Contact/>
        </Element>
        <div>
            <Footer/>
        </div>
    </section>
    </div>
  )
}
