import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
      {/* <!-- Header Upper --> */}
      <div className="header-upper clearfix">
        <div className="auto-container">
          <div className="logo-outer">
            <div className="logo">
              <Link to="/">
                <img src="images/header-logo.png" alt="" title="" />
              </Link>
            </div>
          </div>
          {/* <!-- Main Menu --> */}
          <nav className="main-menu navbar-expand-md navbar-light">
            <div className="navbar-header">
              {/* <!-- Toggle Button --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon flaticon-menu-button"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li className="current dropdown">
                  <a href="/">Home</a>
                  <ul>
                    <li><Link to="/">Home page 01</Link></li>
                    <li><Link to="/index2">Home page 02</Link></li>
                    <li><Link to="/index3">Home page 03</Link></li>
                    <li><Link to="/index4">Home page 04</Link></li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li><Link to="/">Header Style One</Link></li>
                        <li><Link to="/index2">Header Style Two</Link></li>
                        <li><Link to="/index3">Header Style Three</Link></li>
                        <li><Link to="/index4">Header Style Four</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/service-details">Services details</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li className="dropdown">
                      <Link to="/blog">Blog</Link>
                      <ul>
                        <li><Link to="/blog">Blog Page</Link></li>
                        <li><Link to="/blog-details">Blog Standard</Link></li>
                        <li><Link to="/blog-details-2">Blog Details Two</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="/portfolio">Portfolio</Link>
                      <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/faq">Faq's Page</Link></li>
                    <li><Link to="/404">error</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
          {/* <!-- Main Menu End--> */}
          {/* <!--Nav Box--> */}
          <div className="nav-outer clearfix">
            {/* <!-- Main Menu End--> */}
            <div className="outer-box clearfix">
              {/* <!-- Social Links --> */}
              <ul className="social-links clearfix">
                <li><Link to="/"><span className="fab fa-facebook-f"></span></Link></li>
                <li><Link to="/"><span className="fab fa-instagram"></span></Link></li>
                <li><Link to="/"><span className="fab fa-twitter"></span></Link></li>
                <li><Link to="/"><span className="fab fa-dribbble"></span></Link></li>
              </ul>
              {/* <!--Search Box--> */}
              <div className="search-box-outer">
                <div className="dropdown">
                  <button
                    className="search-box-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icofont-search"></i>
                  </button>
                  <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                    <li className="panel-outer">
                      <div className="form-container">
                        <form method="post" action="/blog">
                          <div className="form-group">
                            <input
                              type="search"
                              name="field-name"
                              defaultValue=""
                              placeholder="Search Here"
                              required
                            />
                            <button type="submit" className="search-btn">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Button Box --> */}
              <div className="btn-box">
                <Link to="/contact" className="theme-btn btn-style-one">
                  Quick Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Header Upper--> */}
      {/* <!-- Sticky Header  --> */}
      <div className="sticky-header">
        <div className="container clearfix">
          {/* <!--Logo--> */}
          <div className="logo pull-left">
            <Link to="/" title="">
              <img src="images/header-logo.png" alt="" title="" />
            </Link>
          </div>
          {/* <!--Right Col--> */}
          <div className="pull-right">
            {/* <!-- Main Menu --> */}
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <a href="#">Home</a>
                    <ul>
                      <li><Link to="/">Home page 01</Link></li>
                      <li><Link to="/index2">Home page 02</Link></li>
                      <li><Link to="/index3">Home page 03</Link></li>
                      <li><Link to="/index4">Home page 04</Link></li>
                      <li className="dropdown">
                        <a href="#">Header Styles</a>
                        <ul>
                          <li><Link to="/">Header Style One</Link></li>
                          <li><Link to="/index2">Header Style Two</Link></li>
                          <li><Link to="/index3">Header Style Three</Link></li>
                          <li><Link to="/index4">Header Style Four</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">Services</a>
                    <ul>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/service-details">Services details</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                      <li className="dropdown">
                        <Link to="/blog">Blog</Link>
                        <ul>
                          <li><Link to="/blog">Blog Page</Link></li>
                          <li><Link to="/blog-details">Blog Standard</Link></li>
                          <li><Link to="/blog-details-2">Blog Details Two</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/portfolio">Portfolio</Link>
                        <ul>
                          <li><Link to="/portfolio">Portfolio</Link></li>
                          <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/faq">Faq's Page</Link></li>
                      <li><Link to="/404">error</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header













