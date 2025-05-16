import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section className="w3l-banner py-5" id="home" style={{ backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container py-lg-5 py-md-4">
          <div className="row align-items-center">
            {/* Left Text Section */}
            <div className="col-lg-6 text-left">
              <h1 className="mb-3">Hi, I'm <span style={{ color: '#4ade80' }}>Lalita</span></h1>
              <h2 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                <span style={{ color: '#a5f3fc' }}>Fullstack</span> Enthusiast
              </h2>
              <p className="mb-4">
                I am a versatile full stack developer skilled in both front-end and back-end technologies, 
                dedicated to crafting seamless web solutions.
              </p>
              <div className="mt-sm-5 mt-4">
                <a
                  className="btn btn-style btn-primary mr-2"
                  href="Contact"
                  style={{ marginRight: '10px', backgroundColor: '#10b981', border: 'none' }}
                >
                  Hire Me
                </a>
                <a className="btn btn-style btn-outline-light" href="#portfolio">
                  My Portfolio
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="/lalita.jpeg"
                alt="Lalita"
                style={{
                  width: '300px',
                  borderRadius: '50%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  border: '4px solid #10b981',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w3l-about py-5" id="about">
        <div className="container py-md-5 py-2">
          <div className="row w3l-row">
            <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
              <img src="/longphoto.jpg" alt="About Lalita" className="img-fluid" />
            </div>
            <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
              <h6 className="w3l-title-small mb-1">My Biography</h6>
              <h3 className="w3l-title-main mb-2">A Lead UI Designer & Web Developer based in INDIA</h3>
              <p className="my-4 pe-lg-5">
                I am a dynamic and accomplished full stack developer with a passion for crafting innovative
                digital solutions. With a keen eye for detail and a strong foundation in both front-end and
                back-end technologies, I excel in creating seamless and intuitive web applications from concept
                to deployment.
              </p>
              <div className="my-info mt-4">
                <div className="single-info">
                  <span>Name:</span>
                  <p>Lalita</p>
                </div>
                <div className="single-info">
                  <span>From:</span>
                  <p>Punjab, India</p>
                </div>
                <div className="single-info">
                  <span>Email:</span>
                  <p>
                    <a href="mailto:lalita0606s@gmail.com">lalita0606s@gmail.com</a>
                  </p>
                </div>
                <div className="single-info">
                  <span>Phone:</span>
                  <p>8699227320</p>
                </div>
              </div>

              <ul className="follow-social mt-lg-5 mt-4">
                <li>
                  <h5 className="me-md-3">Follow me on </h5>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lalita-42b629256/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lalita" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCm4VPjxvLzQ7lLdevy4mepw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fab fa-youtube"></span>
                  </a>
                </li>
              </ul>
              <div className="w3l-btn">
                <Link to="Contact" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-2">
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-section py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <h3 className="w3l-title-main">What I do for you</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="about-single">
                <div className="about-icon mb-4">
                  <i className="fas fa-chalkboard"></i>
                </div>
                <div className="about-content">
                  <h5 className="mb-3">
                    <a href="#url">Frontend Development</a>
                  </h5>
                  <p>
                    As a front-end developer, I specialize in crafting the user interface and experience of
                    websites and web applications. I utilize HTML, CSS, and JavaScript to create responsive and
                    visually appealing layouts, ensuring seamless interaction and accessibility across various
                    devices and browsers. Apart from that I have a good command in React JS and other frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
              <div className="about-single">
                <div className="about-icon mb-4">
                  <i className="fab fa-app-store"></i>
                </div>
                <div className="about-content">
                  <h5 className="mb-3">
                    <a href="#url">Backend development</a>
                  </h5>
                  <p>
                    As a back-end developer, my focus is on building and maintaining the server-side logic and
                    databases that power websites and web applications. Using languages like Node.js.
                     I handle tasks such as data storage and server communication to
                    ensure efficient functionality and security behind the scenes.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
              <div className="about-single">
                <div className="about-icon mb-4">
                  <i className="fas fa-camera-retro"></i>
                </div>
                <div className="about-content">
                  <h5 className="mb-3">
                    <a href="#url">Gen AI</a>
                  </h5>
                  <p>
                    As a Gen AI developer, I leverage cutting-edge artificial intelligence technologies to create
                    innovative solutions across various domains. My expertise lies in developing AI models,
                    algorithms, and systems that can understand, generate, and process human-like language,
                    enabling tasks such as natural language processing, image recognition, and decision making.
                  </p>  
                </div>
              </div>
            </div>
          */}
          </div> 

          <div className="w3l-btn text-center">
            <Link to="Services" className="btn btn-border mt-lg-5 mt-4 me-2">
              More services <span className="fas fa-long-arrow-alt-right"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w3l-skills py-5" id="skills">
        <div className="container py-lg-5 py-md-4 py-3">
          <div className="row">
            <div className="col-lg-6 pe-lg-5">
              <img src="/assets/images/about1.jpg" alt="Skills" className="img-fluid" />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
              <h6 className="w3l-title-small mb-2">My skills</h6>
              <h3 className="w3l-title-main">My Featured skills</h3>
              <p className="mt-4">
                Proficient in both frontend and backend development, I excel in crafting responsive interfaces
                using HTML, CSS, and JavaScript, alongside building robust server-side logic with frameworks like
                Node.js and Python/Django. With expertise in managing relational (MySQL) and NoSQL (MongoDB)
                databases, I seamlessly integrate frontend and backend components to create end-to-end solutions.
              </p>
              <div className="progress-info mt-4">
                <h5 className="progress-tittle">React JS</h5>
                <div className="progress">
                 
<div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div> </div> </div> <div className="progress-info mt-4"> <h5 className="progress-tittle">Node JS</h5> <div className="progress"> <div className="progress-bar bg-info" role="progressbar" style={{ width: '75%' }}></div> </div> </div> <div className="progress-info mt-4"> <h5 className="progress-tittle">MongoDB</h5> <div className="progress"> <div className="progress-bar bg-warning" role="progressbar" style={{ width: '65%' }}></div> </div> </div> <div className="progress-info mt-4"> <h5 className="progress-tittle">Express JS</h5> <div className="progress"> <div className="progress-bar bg-danger" role="progressbar" style={{ width: '60%' }}></div> </div> </div> </div> </div> </div> </section>

 {/* Work Experience Section */}
  <section className="w3l-work py-5" id="work">
    <div className="container py-lg-5 py-md-4 py-3">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-7">
          <div className="title-heading-w3 text-center">
            <h3 className="w3l-title-main mb-2">My Work Experience</h3>
            <p className="mb-4">
              Over 2 years of experience working as a full stack developer on various projects including
              startups, internships, and freelance works.
            </p>
          </div>
        </div>
      </div>
      <div className="row work-row">
        <div className="col-lg-6 mb-4">
          <div className="work-experience p-4 shadow rounded bg-white">
            <h5 className="mb-2">ThinkNext Technology Pvt Ltd</h5>
            <p className="mb-1">MERN Stack Developer Intern</p>
            <p className="mb-1">June 2024 - Present</p>
            <ul>
              <li>Developed full stack web applications using React, Node.js, Express, and MongoDB.</li>
              <li>Collaborated in a team to build e-commerce and safety applications.</li>
              <li>Implemented responsive UI with CSS and Bootstrap.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </section>

 
</>

)
}