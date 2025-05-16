import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
   
<section className="w3l-about-breadcrumb text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-5 mt-5">
            <div className="banner-info-grid mt-5">
                <h2 className="w3l-title-breadcrumb">About Me</h2>
            </div>
            <ul className="breadcrumbs-custom-path">
                <li><a href="Home">Home</a></li>
                <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true"></span> About</li>
            </ul>
        </div>
    </div>
</section>






<section className="w3l-content-6" id="skills">
    <div className="content-6-mian py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="content-info-in row">
                <div className="content-gd col-lg-5 pe-lg-5 my-image">
                    <img src="about.jpg" alt="" className="img-fluid" />
                </div>
                <div className="content-gd col-lg-7 mt-lg-0 mt-5 align-self ps-lg-5">
                    <h6 className="w3l-title-small mb-1">About Me</h6>
                    <h3 className="w3l-title-main mb-lg-4 mb-3">A Few words about me</h3>
                    <p className="my-4 pe-lg-5">Proficient in both frontend and backend development, I excel in crafting responsive interfaces using HTML, CSS, and JavaScript, alongside building robust server-side logic with frameworks like Node.js/Express and Python/Django. With expertise in managing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, I seamlessly integrate frontend and backend components to deliver end-to-end solutions. Experienced in Git for collaborative development and possessing strong problem-solving skills, I ensure smooth functionality across the stack while continuously learning and adapting to the latest technologies for delivering innovative solutions.</p>

                    <div className="progress-info mt-5">
                        <h6 className="progress-tittle">UI/UX Design</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar"  
                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info1">
                        <h6 className="progress-tittle">Ideas & Technology</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" 
                                aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info3">
                        <h6 className="progress-tittle">Branding Design</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" 
                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info4 mb-0">
                        <h6 className="progress-tittle">Responsive Web Design</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" 
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



{/* <section className="w3l-index5" id="about">
    <div className="new-block py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="middle-section text-center">
                <div className="section-width">
                    <h3 className="w3l-title-main"> Take a tour of my office. A Video presentation of my beautiful & awesome story.</h3>
                    <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure
                        facere,
                        porro repellat officia quas, dolores magnam assumenda soluta odit
                        harum
                        voluptate inventore ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo
                        officia.</p>
                </div>
                <div className="history-info mt-5">
                    <div className="position-relative">
                        <img src="assets/images/blog9.jpg" className="img-fluid radius-image video-popup-image"
                            alt="video-popup"/>

                        <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span className="video-play-icon">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>

                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe src="https://www.youtube.com/embed/Cu2VnoRcxKM" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                    <iframe src="https://www.youtube.com/embed/Z_KspIX1oXU" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section> */}


<section className="w3l-join py-5" id="join">
    <div className="container py-md-5 py-3">
        <div className="row">
            <div className="col-lg-7 video-info pe-lg-5">
                <div className="title-content">
                    <h6 className="w3l-title-small two">Get in touch</h6>
                    <h3 className="w3l-title-main two mb-3">Let's start a Project! Hire Me.</h3>
                    {/* <p className="pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. Semper at tempufddfel. Lorem ipsum dolor sit, amet consectetur elit.</p> */}

                </div>
            </div>
            <div className="col-lg-5 history-info align-self">
                <div className="w3banner-content-btns d-sm-flex justify-content-lg-end">
                    <Link to="Contact" className="btn btn-style btn-primary mt-lg-5 mt-4 me-sm-3">Hire me </Link>
                    <Link to="Contact" className="btn btn-style transparent-btn mt-lg-5 mt-4 me-2">Contact Me </Link>
                </div>
            </div>
        </div>
    </div>
</section>




<section className="w3l-clients" id="testimonials">
    <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-3">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <span className="w3l-title-small">Reviews</span>
            <h3 className="w3l-title-main">My clients and Testimonials</h3>
                </div>
            <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-5">
                <div className="item">
                    <div className="testimonial-content">
                        <div className="testimonial">
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet init consectetur et beatae elit. Velitae beatae
                                    laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus 
                                    tempora. </q>
                            </blockquote>
                            <div className="testi-des">
                                <div className="test-img"><img src="assets/images/team1.jpg" className="img-fluid"
                                        alt="client-img"/>
                                </div>
                                <div className="peopl align-self">
                                    <h3>William Noah</h3>
                                    <p className="indentity">Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-content">
                        <div className="testimonial">
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet init consectetur et beatae elit. Velitae beatae
                                    laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus 
                                    tempora. </q>
                            </blockquote>
                            <div className="testi-des">
                                <div className="test-img"><img src="assets/images/team2.jpg" className="img-fluid"
                                        alt="client-img"/>
                                </div>
                                <div className="peopl align-self">
                                    <h3>Benjamin</h3>
                                    <p className="indentity">Web designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-content">
                        <div className="testimonial">
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet init consectetur et beatae elit. Velitae beatae
                                    laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus 
                                    tempora. </q>
                            </blockquote>
                            <div className="testi-des">
                                <div className="test-img"><img src="assets/images/team3.jpg" className="img-fluid"
                                        alt="client-img"/>
                                </div>
                                <div className="peopl align-self">
                                    <h3>Isabella Luna</h3>
                                    <p className="indentity">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-content">
                        <div className="testimonial">
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet init consectetur et beatae elit. Velitae beatae
                                    laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus 
                                    tempora. </q>
                            </blockquote>
                            <div className="testi-des">
                                <div className="test-img"><img src="assets/images/team4.jpg" className="img-fluid"
                                        alt="client-img"/>
                                </div>
                                <div className="peopl align-self">
                                    <h3>Elizabeth</h3>
                                    <p className="indentity">Front-end developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-content">
                        <div className="testimonial">
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet init consectetur et beatae elit. Velitae beatae
                                    laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus 
                                    tempora. </q>
                            </blockquote>
                            <div className="testi-des">
                                <div className="test-img"><img src="assets/images/team2.jpg" className="img-fluid"
                                        alt="client-img"/>
                                </div>
                                <div className="peopl align-self">
                                    <h3>Benjamin</h3>
                                    <p className="indentity">Web designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}
