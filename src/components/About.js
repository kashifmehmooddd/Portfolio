import './About.scss'
import AnimatedWord from './AnimatedWord'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])
  return (
    <>
      <div id="about-page" className="row min-vh-100">
        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-1 order-sm-1 mb-auto mb-sm-0 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
          <h1 className="display-3">
            <AnimatedWord letterClass={letterClass} strArray={['ABOUT']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['ME']} />
          </h1>
          <p className="fs-4">
            I'm Kashif Mehmood, a Backend-Focused Full-Stack Engineer with a passion for building scalable, high-performance systems. My expertise lies in architecting robust backend solutions, designing efficient APIs, and implementing cloud-native infrastructure that powers modern applications.
          </p>
          <p className="fs-4">
            With deep proficiency in <strong>Python, Ruby on Rails, Node.js</strong>, and database technologies like <strong>PostgreSQL, MongoDB, and Redis</strong>, I specialize in creating backend systems that handle complex business logic and scale seamlessly. On the frontend, I excel with <strong>React, TypeScript, Vue.js</strong>, and modern CSS frameworks like <strong>Tailwind CSS, Bootstrap, and Sass</strong>, delivering responsive and intuitive user experiences.
          </p>
          <p className="fs-4">
            My cloud infrastructure expertise with <strong>AWS, Docker, and CI/CD pipelines</strong> ensures reliable, automated deployments and infrastructure management. Currently serving as a Software Engineer at <strong>Devsinc</strong> since 2022, I've successfully delivered enterprise-grade applications including healthcare platforms, influencer management systems, and real-time communication tools.
          </p>
          <p className="fs-4">
            I thrive on solving complex technical challenges, from designing microservices architectures to optimizing database queries and implementing security best practices. My goal is to build technology that not only meets today's requirements but anticipates tomorrow's growth.
          </p>
        </div>

        {/*=== SELF PORTRAIT === */}
        <div
          id="imgwrapper"
          className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-2 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center  "
        >
          <div className="tech-highlights">
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-text">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">15+</span>
              <span className="highlight-text">Technologies Mastered</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">∞</span>
              <span className="highlight-text">Problems Solved</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
