import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
   <>
<section className="w3l-about-breadcrumb text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-5 mt-5">
            <div className="banner-info-grid mt-5">
                <h2 className="w3l-title-breadcrumb">Services</h2>
            </div>
            <ul className="breadcrumbs-custom-path">
                <li><a href="#url">Home</a></li>
                <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true"></span> Services</li>
            </ul>
        </div>
    </div>
</section>

<section className="about-section py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
                <div className="about-single">
                    <div className="about-icon mb-4">
                        <i className="fas fa-chalkboard"></i>
                    </div>
                    <div className="about-content">
                        <h5 className="mb-3"><Link to="About">Web Development</Link></h5>
                        <p> I design and develop dynamic websites and applications using HTML, CSS, JavaScript, and frameworks to deliver seamless user experiences.





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
                        <h5 className="mb-3"><Link to="About">App development</Link></h5>
                        <p>
I engineer mobile applications for iOS and Android platforms, crafting intuitive user interfaces and robust functionalities to meet client specifications and enhance user experiences.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
                <div className="about-single">
                    <div className="about-icon mb-4">
                        <i className="fas fa-camera-retro"></i>
                    </div>
                    <div className="about-content">
                        <h5 className="mb-3"><Link to="About">Gen AI</Link></h5>
                        <p>As a Gen AI developer, I leverage advanced techniques in natural language processing, image recognition, and decision making to develop innovative AI solutions for diverse applications.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                <div className="about-single">
                    <div className="about-icon mb-4">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="about-content">
                        <h5 className="mb-3"><Link to="About">Seo Marketing</Link></h5>
                        <p>I optimize digital content and strategies to improve search engine rankings and drive organic traffic to websites.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                <div className="about-single">
                    <div className="about-icon mb-4">
                        <i className="fab fa-buromobelexperte"></i>
                    </div>
                    <div className="about-content">
                        <h5 className="mb-3"><Link to="About">Responsive design</Link></h5>
                        <p>
I create visually appealing and functional designs that adapt seamlessly to various screen sizes and devices for optimal user experience.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                <div className="about-single">
                    <div className="about-icon mb-4">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="about-content">
                        <h5 className="mb-3"><Link to="About">Digital Marketing</Link></h5>
                        <p>
I create and execute digital marketing campaigns across various channels to increase brand visibility, engagement, and conversions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<div className="service-section py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <h3 className="w3l-title-main">Innovative solutions
                to boost your creative projects</h3>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 item">
                <div className="card">
                    <div className="card-header p-0 position-relative border-0">
                        <a href="services.html">
                            <img className="d-block img-responsive" src="assets/images/blog3.jpg" alt="card-image"/>
                        </a>
                    </div>
                    <div className="card-body service-details">
                        <a href="services.html" className="service-heading">Discuss the project </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4 pt-sm-0 pt-2">
                <div className="card">
                    <div className="card-header p-0 position-relative border-0">
                        <a href="services.html">
                            <img className="d-block img-responsive" src="assets/images/blog4.jpg" alt="card-image"/>
                        </a>
                    </div>
                    <div className="card-body service-details">
                        <a href="services.html" className="service-heading">Develop & elaborate </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4 pt-lg-0 pt-2">
                <div className="card">
                    <div className="card-header p-0 position-relative border-0">
                        <a href="services.html">
                            <img className="d-block img-responsive" src="assets/images/blog6.jpg" alt="card-image"/>
                        </a>
                    </div>
                    <div className="card-body service-details">
                        <a href="services.html" className="service-heading">Final approvement </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}
