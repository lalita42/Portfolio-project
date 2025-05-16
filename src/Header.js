import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    

    <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg stroke">
                <h1>
                    <Link className="navbar-brand" to="/">
                        <i className="fab fa-asymmetrik"></i> My Portfolio
                    </Link>
                </h1>
                 
                <button className="navbar-toggler collapsed bg-gradient" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-lg-auto align-items-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Contact">Contact</Link>
                        </li>

                        {/* <!--/right-btn--> */}
                        <div className="header-btn mx-2">
                            <Link className="btn btn-style btn-primary mr-lg-5" to="/Contact"> Hire Me</Link>
                        </div>
                        {/* <!--/right-btn--> */}

                    </ul>
                </div>
{/* 
                <!-- search --> */}
                <ul className="cd-header-buttons px-lg-2">
                    <li>
                    <a className="cd-search-trigger" href="#cd-search">
                        <span></span>
                    </a>
                    </li>
                </ul>
                <div id="cd-search" className="cd-search">
                    <form action="#url" method="post">
                        <input name="Search" type="search" placeholder="Click enter after typing..."/>
                    </form>
                </div>
                {/* <!-- //search -->
                
                <!-- toggle switch for light and dark theme --> */}
                <div className="cont-ser-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                {/* <!-- //toggle switch for light and dark theme --> */}
            </nav>
        </div>
    </header>
    {/* <!--//header--> */}

    </>
  )
}
