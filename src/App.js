import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';

function App() {
  return (
    <div classNameName="main-section">
      <header>
        <div className="container">
          <div className="navigation-bar row justify-content-evenly">
            <div className="logo col-3 col-md-auto">
              <img src={require('./image/logo-white.png')} alt=""></img>
            </div>
            <div className="info col-7 d-none d-xl-block">
              <div className="row justify-content-end align-items-center">
                <div className="col-3 call">
                  <div className="call-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="call-content">
                    <div>call anytime</div>
                    <div>+98(000)-9630</div>
                  </div>
                </div>
                <div className="col-3 email">
                  <div className="email-icon">
                    <i className="bi bi-envelope-paper"></i>
                  </div>
                  <div className="email-content">
                    <div>send email</div>
                    <div>ambed@company.com</div>
                  </div>
                </div>
                <div className="col-3 location">
                  <div className="location-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="location-content">
                    <div>call anytime</div>
                    <div>Melbourne, Australia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-icon  col-2 d-none d-md-flex">
              <div className="twitter size ">
                <i className="bi bi-twitter"></i>
              </div>
              <div className="facebook size">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="pinterest size">
                <i className="bi bi-pinterest"></i>
              </div>
              <div className="instagram size">
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container bg-light transform">
        <div className="row align-items-center">
          <div className="nav-bar col-7 justify-content-end">
            <div className="main-menu d-xxl-flex d-xl-flex justify-content-evenly align-items-center d-none d-xl-block">
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li>
                <a href="#">page</a>
                <ul className="sub-menu">
                  <li><a href="#">team</a></li>
                  <li><a href="#">team carousel</a></li>
                  <li><a href="#">team details</a></li>
                  <li><a href="#">testimonials</a></li>
                  <li><a href="#">testimonials carousel</a></li>
                  <li><a href="#">gallery</a></li>
                  <li><a href="#">gallery carousel</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">404 pages</a></li>
                </ul>
              </li>
              <li>
                <a href="#">projects</a>
                <ul className="sub-menu">
                  <li><a href="#">our projects</a></li>
                  <li><a href="#">projects carousel</a></li>
                  <li><a href="#">projects details</a></li>
                </ul>
              </li>
              <li><a href="#">services</a>
                <ul className="sub-menu">
                  <li><a href="#">services</a></li>
                  <li><a href="#">services carousel</a></li>
                  <li><a href="#">room wallpapers</a></li>
                  <li><a href="#">wallpapers sheets</a></li>
                  <li><a href="#">wallpapers painting</a></li>
                  <li><a href="#">interior designing</a></li>
                  <li><a href="#">PVC panels</a></li>
                  <li><a href="#">outdoor design</a></li>
                </ul>
              </li>
              <li><a href="#">blog</a>
                <ul className="sub-menu">
                  <li><a href="#">blog grid</a></li>
                  <li><a href="#">blog carousel</a></li>
                  <li><a href="#">blog sidebar</a></li>
                  <li><a href="#">blog sidebar 02</a></li>
                  <li><a href="#">blog details</a></li>
                </ul>
              </li>
              <li><a href="#">contact</a></li>
            </div>
          </div>
          <div className="col-5 d-flex align-items-center justify-content-end search">
            <div className="search-logo padding">
              <i className="bi bi-search"></i>
            </div>
            <div className="btn btn-light d-none d-md-block">
              <a href="#">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <OwlCarousel className='owl-theme' nav={false} loop={true} items={1} dots={false} autoplay>
          <div className='item'>
            <img src={require('./image/asset 51.jpeg')} alt="slider-image"></img>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__icon">
                      <img src={require('./image/asset6.png')} alt="" />
                    </div>
                    <div className="main-slider__sub-title-box">
                      <p className="main-slider__sub-title">welcome to ambed</p>
                    </div>
                    <h2 className="main-slider__title">Quality <br /> Wallpapers <span>&</span> <br />Painting For Home</h2>
                    <div className="btn btn-dark">
                      <a href="#">discover more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <img src={require('./image/asset 52.jpeg')} alt="slider-image" />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__icon">
                      <img src={require('./image/asset6.png')} alt="" />
                    </div>
                    <div className="main-slider__sub-title-box">
                      <p className="main-slider__sub-title">welcome to ambed</p>
                    </div>
                    <h2 className="main-slider__title">Quality <br /> Wallpapers <span>&</span> <br />Painting For Home</h2>
                    <div className="btn btn-dark">
                      <a href="#">discover more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <img src={require('./image/asset 53.jpeg')} alt="slider-image" />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__icon">
                      <img src={require('./image/asset6.png')} alt="" />
                    </div>
                    <div className="main-slider__sub-title-box">
                      <p className="main-slider__sub-title">welcome to ambed</p>
                    </div>
                    <h2 className="main-slider__title">Quality <br /> Wallpapers <span>&</span> <br />Painting For Home</h2>
                    <div className="btn btn-dark">
                      <a href="#">discover more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      <div className="elementor-widget-wrap elementor-element-populated bg-color">
        <div className="elementor-element elementor-element-536b7857 elementor-widget elementor-widget-ambed-about">
          <div className="elementor-widget-container">
            <section className="about-one">
              <div className="about-one-shape-2 float-bob-x"></div>
              <div className="about-one-wall">
                <img src={require('./image/asset 7.png')} alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="about-one__left">
                      <span className="section-title__tagline">ABOUT COMPANY</span>
                      <h2 className="section-title__title">We’re Providing Quality <br /> Wall Designs</h2>
                      <div className="section-title__line"></div>
                      <p className="about-one__text-1">We have 30+ years of experiences for give you better quality results.</p>
                      <ul className="list-unstyled about-one__points ml-0 row justify-content-between justify-content-lg-evenly">
                        <li className="col-5 col-md-6 col-lg-4 col-xl-6 col-sm-12">
                          <div className="about-one__points-content-box">
                            <div className="about-one__points-icon icon-svg">
                              <span className="icon-wallpaper">
                                <i className="bi bi-journal-text"></i>
                              </span>
                            </div>
                            <div className="about-one__points-text-box">
                              <p className="about-one__points-text">Smart &amp; Unique Wall Work</p>
                            </div>
                          </div>
                        </li>
                        <li className="col-6 col-md-6 col-lg-4 col-xl-6 col-sm-12">
                          <div className="about-one__points-content-box">
                            <div className="about-one__points-icon icon-svg">
                              <span aria-hidden="true" className="icon-high-quality">
                                <i className="bi bi-award"></i>
                              </span>
                            </div>
                            <div className="about-one__points-text-box">
                              <p className="about-one__points-text">The Best Quality Standards</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p className="about-one__text-2">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua lonm andhn. Aenean tincidunt id mauris id  auctor donec at ligula lacus.</p>
                      <div className="about-one__contact-us">
                        <div className="about-one__btn-box">
                          <a href="#" className="thm-btn about-one__btn">Read More About</a>
                        </div>
                        <div className="about-one__call">
                          <div className="about-one__call-icon icon-svg">
                            <span aria-hidden="true" className="icon-phone-call"></span>
                          </div>
                          <div className="about-one__call-text">
                            <p>Call anytime</p>
                            <a href="#">+ 98(000)-9630</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 py-5">
                    <div className="about-one__right">
                      <div className="about-one__img">
                        <img src={require('./image/asset 8.jpeg')} alt="" />
                      </div>
                      <div className="about-one__small-img">
                        <img src={require('./image/asset 9.jpeg')} alt="" />
                      </div>
                      <div className="about-one__project">
                        <div className="project-content">
                          <i className="bi bi-journal-text"></i>
                          <h3>8690</h3>
                          <p className="about-one__project-text">Successful Project</p>
                        </div>
                      </div>
                      <div className="about-one__shape-1 float-bob-y"></div>
                      <div className="about-one__dot">
                        <img src={require('./image/asset 10.png')} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="features">
        <div className="container">
          <ul className="row">
            <li className='col-3 col-xl-3 col-lg-6 col-md-6 col-sm-12'>
              <div className="first-content">
                <div className="feature-one-shape">
                  <img src={require('./image/asset 11.png')} alt="" />
                </div>
                <div className="feature-two-shape">
                  <img src={require('./image/asset 12.png')} alt="" />
                </div>
                <div className="feature-one-content">
                  <div className="smart-work-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h3 className="smart-work-title">
                    <a href="#">smart work</a>
                  </h3>
                  <p className="feature-one__text">There are many of pass of lorem ipsum available, but the majority.</p>
                  <div className="feature-one__arrow">
                    <i class="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </li>
            <li className='col-3 col-xl-3 col-lg-6 col-md-6 col-sm-12'>
              <div className="first-content">
                <div className="feature-one-shape">
                  <img src={require('./image/asset 11.png')} alt="" />
                </div>
                <div className="feature-two-shape">
                  <img src={require('./image/asset 12.png')} alt="" />
                </div>
                <div className="feature-one-content">
                  <div className="smart-work-icon">
                    <i class="bi bi-calendar2-event"></i>
                  </div>
                  <h3 className="smart-work-title">
                    <a href="#">smart work</a>
                  </h3>
                  <p className="feature-one__text">There are many of pass of lorem ipsum available, but the majority.</p>
                  <div className="feature-one__arrow">
                    <i class="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </li>
            <li className='col-3 col-xl-3 col-lg-6 col-md-6 col-sm-12'>
              <div className="first-content">
                <div className="feature-one-shape">
                  <img src={require('./image/asset 11.png')} alt="" />
                </div>
                <div className="feature-two-shape">
                  <img src={require('./image/asset 12.png')} alt="" />
                </div>
                <div className="feature-one-content">
                  <div className="smart-work-icon">
                    <i class="bi bi-person-plus"></i>
                  </div>
                  <h3 className="smart-work-title">
                    <a href="#">smart work</a>
                  </h3>
                  <p className="feature-one__text">There are many of pass of lorem ipsum available, but the majority.</p>
                  <div className="feature-one__arrow">
                    <i class="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </li>
            <li className='col-3 col-xl-3 col-lg-6 col-md-6 col-sm-12'>
              <div className="first-content none">
                <div className="feature-one-shape">
                  <img src={require('./image/asset 11.png')} alt="" />
                </div>
                <div className="feature-two-shape">
                  <img src={require('./image/asset 12.png')} alt="" />
                </div>
                <div className="feature-one-content">
                  <div className="smart-work-icon">
                    <i class="bi bi-hand-thumbs-up"></i>
                  </div>
                  <h3 className="smart-work-title">
                    <a href="#">smart work</a>
                  </h3>
                  <p className="feature-one__text">There are many of pass of  <br /> lorem ipsum available, but the majority.</p>
                  <div className="feature-one__arrow">
                    <i class="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="service-content" >
            <div className="service-heading">
              <div className="service-subtitle">OUR SERVICES</div>
              <div className="service-main-heading">
                <h2 className='head'>Services We’re Offering</h2>
                <div className="section-title__line"></div>
              </div>
            </div>
          </div>
          <div className="row zindex">
            <div className="col-xl-4 col-lg-4 py-md-3">
              <div className="service-oneimage">
                <img src={require('./image/asset 13.jpeg')} alt="" />
                <div class="services-one__icon icon-svg-large">
                  <span class="bi bi-menu-up"></span>
                </div>
              </div>
              <div className="service-onecontent">
                <h3 class="services-one__title">
                  <a href="#">Room Wallpapers</a>
                  <p class="services-one__text">Morbi feugiat porta purus, at eleifend dolor ac.</p>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 py-md-3">
              <div className="service-oneimage">
                <img src={require('./image/asset 14.jpeg')} alt="" />
                <div class="services-one__icon icon-svg-large">
                  <span class="bi bi-brush"></span>
                </div>
              </div>
              <div className="service-onecontent">
                <h3 class="services-one__title">
                  <a href="#">Wall Paintings</a>
                  <p class="services-one__text">Morbi feugiat porta purus, at eleifend dolor ac.</p>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 py-md-3">
              <div className="service-oneimage">
                <img src={require('./image/asset 15.jpeg')} alt="" />
                <div class="services-one__icon icon-svg-large">
                  <span class="bi bi-file-earmark-spreadsheet"></span>
                </div>
              </div>
              <div className="service-onecontent">
                <h3 class="services-one__title">
                  <a href="#">Wall Sheets</a>
                  <p class="services-one__text">Morbi feugiat porta purus, at eleifend dolor ac.</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quality-work">
        <div className="quality-work-shape-1">
          <img src={require('./image/asset 16.png')} alt="" />
        </div>
        <div className="quality-work-shape-2">
          <img src={require('./image/asset 17.png')} alt="" />
        </div>
        <div className="quality-work-shape-3">
          <img src={require('./image/asset 18.png')} alt="" />
        </div>
        <div className="quality-work-shape-4">
          <img src={require('./image/asset 19.png')} alt="" />
        </div>
        <div className="quality-work-shape-5">
          <img src={require('./image/asset 20.png')} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="qualitywork-left">
                <div className="quality-imagebox">
                  <div className="qualitywork-image">
                    <img src={require('./image/asset 21.png')} alt="" />
                  </div>
                  <div className="qualitywork-smallimage">
                    <img src={require('./image/asset 22.jpeg')} alt="" />
                  </div>
                  <div className="qualitywork-videobox">
                    <div className="quality-work__curved-circle-box">
                      <div className="curved-circle"></div>
                      <div className="quality-work__video-link">
                        <div className="quality-work__video-icon">
                          <i class="bi bi-play-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="qualitywork-right">
                <div className="section-title text-left">
                  <span class="section-title__tagline">INTERIOR DESIGNING</span>
                  <h2 class="section-title__title">Quality Work That Meets Your Expectations</h2>
                  <div class="quality-section-title__line"></div>
                </div>
                <p class="quality-work__text-1">There are many variations of passages of lorem ipsum available but the majority have suffered.</p>
                <ul className="qualitywork-feature">
                  <li>
                    <div className="icon icon-svg-large">
                      <i class="bi bi-images"></i>
                    </div>
                    <div class="text">
                      <p>Innovative<br />Wallpaper Designs</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon icon-svg-large">
                      <i class="bi bi-receipt-cutoff"></i>
                    </div>
                    <div class="text">
                      <p>High Quality Wall<br />Materials</p>
                    </div>
                  </li>
                </ul>
                <p class="quality-work__text-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                <div className="quality-work__progress">
                  <div className="quality-work__progress-single">
                    <h4 class="quality-work__progress-title">Interior Wall Design</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar counted">
                        <div className="count-text">88%</div>
                      </div>
                    </div>
                  </div>
                  <div className="quality-work__progress-single"></div>
                  <h4 class="quality-work__progress-title">Exterior Painting</h4>
                  <div className="bar">
                    <div className="bar-inner-2 count-bar counted">
                      <div className="count-text">60%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-heading">
            <span className="section-title__tagline">TEAM MEMBERS</span>
            <h2 className="section-title__title">Meet the Expert Team</h2>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="testimonial-image-box">
                <div className="testimonial-image-section">
                  <div className="testimonial-image">
                    <img src={require('./image/asset 32.jpeg')} alt="" />
                    <div class="team-one__social">
                      <a href="#">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="team-one__title-text">
                    <div className="text-shape">
                      <img src={require('./image/asset 33.png')} alt="" />
                      <p className="text-one-post">DESIGNER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;