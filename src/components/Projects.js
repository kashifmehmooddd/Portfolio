import { useEffect, useState } from 'react'
import AnimatedWord from './AnimatedWord'
import './Projects.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div id="projects-page" className="projects-container">
        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="projects-header">
          <h1 className="projects-title">
            <AnimatedWord letterClass={letterClass} strArray={['MY']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['PROJECTS']} />
          </h1>
          <p className="projects-subtitle">Backend-focused full-stack applications and system architecture</p>
        </div>

        {/*=== PROJECTS CARDS === */}
        <div className="projects-grid">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Real Projects */}
            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">Modern Animal</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">Django</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">GraphQL</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Worked as a full-stack engineer implementing a module to automate the process of storing previous medical history of patients via AI model and OCR. Also worked on multiple tickets as maintenance for this veterinary platform.
                  </p>
                  <div className="project-features">
                    <div className="feature">• AI Model Integration</div>
                    <div className="feature">• OCR Implementation</div>
                    <div className="feature">• Medical Data Processing</div>
                    <div className="feature">• Full-stack Development</div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="https://modernanimal.com/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">YouSound</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">Ruby on Rails</span>
                    <span className="tech-tag">Vue.js</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Handling this project and mostly refactoring this project for the betterment. This is basically a competitor platform for Spotify with music streaming capabilities and user management features.
                  </p>
                  <div className="project-features">
                    <div className="feature">• Code Refactoring</div>
                    <div className="feature">• Music Streaming</div>
                    <div className="feature">• User Management</div>
                    <div className="feature">• Platform Optimization</div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="https://yousound.com/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">Gen-Con</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">Ruby on Rails</span>
                    <span className="tech-tag">React</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Gen-Con is the largest tabletop game convention in North America by both attendance and number of events. Features traditional pen-and-paper, board, and card games, including role-playing games, miniatures wargames, live action role-playing games, collectible card games, and strategy games. Worked as a software engineer for their web app product operations regarding conventions.
                  </p>
                  <div className="project-features">
                    <div className="feature">• Convention Management</div>
                    <div className="feature">• Event Registration</div>
                    <div className="feature">• User Operations</div>
                    <div className="feature">• Large Scale Platform</div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="https://www.gencon.com/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">Specialite</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Firebase</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Initiated and implemented the public registration process for restaurants to join the app, allowing them to manage orders, confirm orders, and add dishes through a web app dashboard. Additionally, created a centralized project dashboard for processing registrations and monitoring all orders and restaurants.
                  </p>
                  <div className="project-features">
                    <div className="feature">• Restaurant Management</div>
                    <div className="feature">• Order Processing</div>
                    <div className="feature">• Real-time Monitoring</div>
                    <div className="feature">• Centralized Dashboard</div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="livebtn btn fs-5" disabled>Private Project</button>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">Park-Guard</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">Database Management</span>
                    <span className="tech-tag">Web Portal</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Led the development of a centralized database management system (DBMS) for a parking insurance coverage organization, enabling seamless collaboration with partner companies. The system provides customizable online claim forms that partners can distribute to customers. Built a comprehensive partner portal for real-time monitoring and management of claim submissions, enhancing operational efficiency and user experience.
                  </p>
                  <div className="project-features">
                    <div className="feature">• Database Management System</div>
                    <div className="feature">• Partner Collaboration</div>
                    <div className="feature">• Customizable Forms</div>
                    <div className="feature">• Real-time Monitoring</div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="livebtn btn fs-5" disabled>Enterprise Project</button>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card backend-project">
                <div className="project-header">
                  <h3 className="card-title">Daycare APP</h3>
                  <div className="tech-stack">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Mobile Development</span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text fs-5">
                    Designed and built a mobile application based on Flutter for daycare management, providing comprehensive tools for managing children, staff, and daily operations in daycare facilities.
                  </p>
                  <div className="project-features">
                    <div className="feature">• Mobile Application</div>
                    <div className="feature">• Flutter Development</div>
                    <div className="feature">• Daycare Management</div>
                    <div className="feature">• Operations Management</div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="livebtn btn fs-5" disabled>Private Project</button>
                </div>
              </div>
            </div>

            {/* Existing projects */}
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/f1af7ea7-1620-4d44-ba30-fd4b08de2b74/Screenshot20240406at124538AM.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Assemble</h3>
                  <p className="card-text fs-5">
                    A platform for influencers who can get their sessions booked
                    by their fans, fans can ask for the video and audio
                    responses from their idols to proceed with their goals,
                    upgraded this entire website to a new initiative for my
                    companys' client with one team member only (Ruby on rails)
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://assemble.fyi/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/d5982bed-3346-42a2-9f42-6d8c87fbda72/Screenshot20240406at125923AM.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">SupportLinc</h3>
                  <p className="card-text fs-5">
                    The main goal of this organization is to help people with
                    their medical and emotional well-being. They offer advice on
                    various aspects of health, including mental fitness, alcohol
                    addiction rehabilation etc,. I contributed with this module,
                    Users complete a survey to assess their health condition,
                    which leads to another page which shows them recommendations
                    with the help of their responses stored in the survey
                    response. they can use those recommendations to get better
                    at any aspect of health in multiple languages. also, a pdf
                    report will also be attached in the result page of their
                    response from where they can analyze their health condition.
                    contributed for my company (Ruby on rails)
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://supportlinc.com/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/10be364e-bca7-4d0d-8142-195ba7c76717/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Nebula - Realtime Chat App</h3>
                  <p className="card-text fs-5">
                    A chat application which uses Firebase database to fetch
                    conversations in realtime.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://nebulachatapp.web.app" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/70141a98-3661-4019-aecd-ab3e7ef5e7b2/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Weather App</h3>
                  <p className="card-text fs-5">
                    A weather app developed using the OpenWeatherMap API, with
                    dynamic backgrounds based on weather conditions
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="kashifmehmooddd.github.io/react-weather-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/a263d505-1ca3-4b88-b621-f077d34318a7/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Memoed - Notes Taking App</h3>
                  <p className="card-text fs-5">
                    A basic notes taking application built using ReactJS.
                    Firebase was used for backend and for hosting
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://memoed-73535.web.app/" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/15658a0e-b80e-480c-a7d8-2f36be332567/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">
                    luxescope - Fictional Watch Store
                  </h3>
                  <p className="card-text fs-5">
                    A fake ecommerce website built with Elementor. It integrates
                    various plugins like Woocommerce and Shopengine
                  </p>
                </div>
                <div className="card-footer">
                  <a href="http://luxescope.byethost22.com" target="_blank" rel="noreferrer">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/5b7930c1-fc49-406b-b11d-c1c79930289b/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Travel Landing Page Design</h3>
                  <p className="card-text fs-5">
                    Responsive landing page design built using Bootstrap
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://kashifmehmooddd.github.io/travel-landing-page/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img src="https://ucarecdn.com/b60bef1d-2a16-4bf7-9aad-ddb4b3fc18e1/-/preview/-/quality/smart/-/format/auto/" alt="Quiz App" />
                <div className="card-body">
                  <h3 className="card-title">Quiz App</h3>
                  <p className="card-text fs-5">
                    A basic quiz application made with JavaScript
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://kashifmehmooddd.github.io/quiztoit-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
