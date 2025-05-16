import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="text-center">
        <div className="footer py-5">
            <div className="container py-md-4">
                <div clss="footer-logo">
                    <Link className="logo" to="Home">
                        <i className="fab fa-asymmetrik"></i> UI Portfolio
                    </Link>
                </div>
                <div className="footer-contact-info mt-4">
                    <ul>
                        <li>
                            <a href="tel:+91 8699227320 " className="contact-text-sub">
                                <span className="fas fa-phone me-2"></span>8699227320</a>
                        </li>
                        <li>
                            <Link to="lalita0606s@gmail.com" className="contact-text-sub">
                                <span className="fas fa-envelope me-2"></span>info@example.com </Link>
                        </li>
                        <li>
                            <p className="contact-text-sub"> 
                                <span className="fas fa-map-marker me-2"></span>
                                Punjab , India</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container py-4">
            <div className="row footer-grids">
                <div className="col-lg-6 copyright text-lg-start text-center align-center">
                    <p>© 2022 UI Portfolio. All Rights Reserved | Design by Lalita </p>
                </div>
                <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4">
                    <div className="social">
                        <ul>
                            <li><Link to="https://www.youtube.com/channel/UCm4VPjxvLzQ7lLdevy4mepw"><span className="fab me-2 fa-youtube"></span></Link></li>
                            <li><Link to="https://github.com/lalita42"><span className="fa fa-github"></span></Link></li>
                            <li><Link to="https://www.linkedin.com/in/lalita-42b629256/"><span className="fab fa-linkedin-in"></span></Link></li>
                           
                            {/* <li><a href="#url"><span className="fab me-2 fa-vk"></span></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- //footer --> */}
    </>
  )
}
