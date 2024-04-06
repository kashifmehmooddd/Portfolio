import './About.scss'
import AnimatedWord from './AnimatedWord'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])
  return (
    <>
      <div id="about-page" className="row h-100">
        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 mb-auto mb-sm-0 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
          <h1 className="display-3">
            <AnimatedWord letterClass={letterClass} strArray={['ABOUT']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['ME']} />
          </h1>
          <p className="fs-4">
            Hello there, I'm Kashif Mehmood, a Full-Stack Developer equipped
            with a broad range of technical proficiencies including Django, Ruby
            on Rails, Node.js, Express, as well as SQL and No-SQL Databases. My
            academic background lies in Computer Science, where I discovered my
            natural affinity for programming. It resonated with me profoundly,
            feeling almost like unraveling a complex game. This passion for
            problem-solving seamlessly extended into my interest in esports.
          </p>
          <p className="fs-4">
            Im currently a Software Engineer at the company named Devsinc, a
            company I joined immediately after graduating in 2022. Prior to
            this, I engaged in freelancing as a web developer, primarily
            focusing on JavaScript frameworks. Transitioning to a
            service-oriented company has been instrumental in honing my
            adaptability to various technologies, tailored to meet client
            specifications. Over the past two years, I've expanded my skill set
            by working across multiple stacks, resulting in a versatile
            technical aptitude.
          </p>
          <h2></h2>
        </div>

        {/*=== SELF PORTRAIT === */}
        <div
          id="imgwrapper"
          className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center  "
        >
          {/* <img
            alt="profilepicture"
            className="d-flex"
            src=""
          /> */}
        </div>
      </div>
    </>
  )
}

export default About
