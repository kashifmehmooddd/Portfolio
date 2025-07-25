import { Link } from 'react-router-dom'
import Rocket from '../assets/images/rocketship.png'
import './Layout.scss'
import './Home.scss'
import AnimatedWord from './AnimatedWord'
import { useEffect, useState } from 'react'
import Resume from '../assets/KMR.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const hello = ['HELLO, ']
  const firstName = ['Kashif ']
  const lastName = [' Mehmood']

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <div id="homepage" className="row  min-vh-100">
      {/*=== PAGE TITLE AND DESCRIPTION === */}
      <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 d-flex flex-column justify-content-start justify-content-sm-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
        <h1 className="display-1">
          <AnimatedWord letterClass={letterClass} strArray={hello} />
          <br />
          <span className={letterClass}>I'M</span>&nbsp;
          <AnimatedWord letterClass={letterClass} strArray={firstName} />
          &nbsp;
          <AnimatedWord letterClass={letterClass} strArray={lastName} />
        </h1>
        <h2 className="mt-sm-2 mt-lg-3 display-6">Backend-Focused Full-Stack Engineer</h2>
        <p className="tech-stack-preview mt-2">
          <span className="tech-highlight">Python</span> • <span className="tech-highlight">Ruby on Rails</span> • <span className="tech-highlight">Node.js</span> • <span className="tech-highlight">React</span> • <span className="tech-highlight">TypeScript</span> • <span className="tech-highlight">PostgreSQL</span> • <span className="tech-highlight">AWS</span>
        </p>
        <p className="specialty-text mt-3">
          Specializing in scalable backend systems, API architecture, and cloud infrastructure
        </p>
        <div className="d-flex">
          <Link to="/contact" className="flat-button mt-2 mt-sm-3 mt-lg-4 fs-4">
            CONTACT ME
          </Link>
          <a
            href={Resume}
            className="view-resume mt-2 mt-sm-3 mt-lg-4 fs-4"
            target="_blank"
            rel="noreferrer"
          >
            VIEW RESUME
          </a>
        </div>
      </div>

      {/*=== DECOR IMAGE === */}
      <div
        id="imagewrapper"
        className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center "
      >
        <img
          className="planet mw-100 px-lg-3 "
          src="https://ucarecdn.com/9de76d9e-7029-4465-a820-a910fdf26065/-/preview/-/quality/smart/-/format/auto/"
          alt="Planet illustration"
        ></img>
        <img className="rocketship " src={Rocket} alt="Rocket ship"></img>
      </div>
    </div>
  )
}

export default Home
