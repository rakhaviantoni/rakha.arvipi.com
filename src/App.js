import React, { Component } from 'react';
import './App.css';
import './Aos.min.css';
import './Bootstrap.min.css';

class App extends Component {

  componentDidMount(){
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
  }

  render() {
    function combine(name) {
      return name.first + ' ' + name.last;
    }
  
    const name = {
      first: 'Rakha',
      last: 'Viantoni Prastya'
    };

    return (
      <div className="App">
      <div className="ipl-progress-indicator" id="ipl-progress-indicator">
        <div className="ipl-progress-indicator-head">
          <div className="first-indicator"></div>
          <div className="second-indicator"></div>
        </div>
        <div className="insp-logo-frame">
          <center>
            <img src="https://rakha.arvipi.com/img/logoarvipi.png" alt="raka.arvipi.com" height="112" width="112" /></center>
        </div>
      </div>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-red" color-on-scroll="400">
            <div className="container">
              <div className="navbar-translate"><a className="navbar-brand" href="https://rakha.arvipi.com" rel="tooltip">rakha.arvipi.com</a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span className="navbar-toggler-bar bar3"></span></button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#top">Top</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#skills">Skills</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    <div className="page-content">
      <div id="top">
        <div className="profile-page">
          <div className="wrapper">
            <div className="page-header page-header-small" filter-color="red">
              <div className="page-header-image" data-parallax="true"></div>
              <div className="container">
                <div className="content-center">
                  <div className="cc-profile-image"><a data-toggle="modal" data-target="#RakhaViantoni"><img src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARUAAAAJDNmYWJhYWE0LTNiNDctNDM5My1hOWJjLTkyMzRkMGU1M2QzNg.jpg" alt="Rakha Viantoni"/></a></div>
                  <div className="h2 title">{combine(name)}</div>
                  <p className="text-white">Full-stack Web Developer</p>
                  <a className="btn btn-red smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-red" href="https://arvipi.com/documents/Rakha_Viantoni_Prastya-CV.pdf" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                </div>
              </div>
              <div className="modal fade modal-mini modal-primary" id="RakhaViantoni" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header justify-content-center">
                              <img src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARUAAAAJDNmYWJhYWE0LTNiNDctNDM5My1hOWJjLTkyMzRkMGU1M2QzNg.jpg" className="rounded-circle" alt="Rakha Viantoni"/>
                          </div>
                          <div className="modal-body">
                            <p><strong>{combine(name)}</strong><br/>Full-stack Web Developer</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section">
                <div className="container">
                  <div className="button-container">
                    <a className="btn btn-fb btn-round btn-lg btn-icon" href="https://facebook.com/rakatonii" target='_blank' rel="noopener noreferrer" title="Follow me on Facebook"><i className="fab fa-facebook-f fa-3x"></i></a>
                    <a className="btn btn-tw btn-round btn-lg btn-icon" href="https://twitter.com/rakhaviantoni" target='_blank' rel="noopener noreferrer" title="Follow me on Twitter"><i className="fab fa-twitter fa-3x"></i></a>
                    <a className="btn btn-ig btn-round btn-lg btn-icon" href="https://www.instagram.com/rakhaviantoni/" target='_blank' rel="noopener noreferrer" title="Follow me on Instagram"><i className="fab fa-instagram fa-3x"></i></a>
                    <a className="btn btn-ld btn-round btn-lg btn-icon" href="https://www.linkedin.com/in/rakhaviantoni/" target='_blank' rel="noopener noreferrer" title="Follow me on Linkedin"><i className="fab fa-linkedin-in fa-3x"></i></a>
                    <a className="btn btn-gh btn-round btn-lg btn-icon" href="https://www.github.com/rakhaviantoni/" target='_blank' rel="noopener noreferrer" title="Follow me on Github"><i className="fab fa-github-alt fa-3x"></i></a>
                    {/* <a className="btn btn-gp btn-round btn-lg btn-icon" href="https://plus.google.com/u/0/+RakhaViantoniPrastya/" target='_blank' rel="noopener noreferrer" title="Follow me on Google+"><i className="fab fa-google-plus-g fa-3x"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="about">
          <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset="10">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">About</div>
                    <p>A passionate Web Developer with 3+ years of experience in modern website development. Proficient with Laravel and Vue combination that has implemented on creating some projects. Have experienced with famous Mobile Programmings like Android Studio and Ionic.</p>
                    <p>Love to create a scalable website with modern features. Able to work under deadline independently or as a part of a team.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">Basic Information</div>
                    <div className="row">
                      <div className="col-sm-4"><strong>Age:</strong></div>
                      <div className="col-sm-8">20</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong>Email:</strong></div>
                      <div className="col-sm-8">rakha@arvipi.com</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong>Phone:</strong></div>
                      <div className="col-sm-8">+62 8963 224 8327</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong>Based on:</strong></div>
                      <div className="col-sm-8">Jakarta, Indonesia</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong>Languages:</strong></div>
                      <div className="col-sm-8">Bahasa, English</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="skills">
          <div className="container">
            <div className="h4 text-center mb-4 title">Skills</div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="card-body">
                <div className="row">
                    <div className="col-sm-2"><strong>Languages:</strong></div>
                    <div className="col-sm-7">Strong: PHP<br/>Knowledgeable: Java, Ruby, Python, Go</div>
                    <div className="col-sm-3"><i className="fab fa-php fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-python fa-3x"></i></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-2"><strong>WebDev:</strong></div>
                    <div className="col-sm-7">Strong: Laravel, JS, jQuery, Vue, Sass, Ionic<br/>Knowledgeable: Rails, Django, ExpressJS, PWA, Angular, React, React Native</div>
                    <div className="col-sm-3"><i className="fab fa-laravel fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-vuejs fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-angular fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-react fa-3x"></i></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-2"><strong>Database:</strong></div>
                    <div className="col-sm-7">Strong: MySQL, Postgre SQL<br/>Knowledgeable: Firebase, MongoDB, Redis</div>
                    <div className="col-sm-3"><i className="fas fa-database fa-3x"></i></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-2"><strong>Others:</strong></div>
                    <div className="col-sm-7">Arduino, IoT, Linux, NodeJS, NPM, Git, Gulp, Webpack, Yarn</div>
                    <div className="col-sm-3"><i className="fab fa-linux fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-node-js fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-npm fa-3x"></i>&nbsp;&nbsp;<i className="fab fa-git fa-3x"></i></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="h4 text-center mb-4 title">Portfolio</div>
                <div className="nav-align-center">
                  <ul className="nav nav-pills nav-pills-primary" role="tablist">
                    <li className="nav-item"><a className="nav-link active" title="Web-based" data-toggle="tab" href="#web-based" role="tablist"><i className="fas fa-laptop"></i></a></li>
                    <li className="nav-item"><a className="nav-link" title="Mobile-based" data-toggle="tab" href="#mobile-based" role="tablist"><i className="fas fa-mobile-alt"></i></a></li>
                    {/* <li className="nav-item"><a className="nav-link" title="Desktop" data-toggle="tab" href="#desktop" role="tablist"><i className="fa fa-desktop" aria-hidden="true"></i></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content gallery mt-5">
              <div className="tab-pane active" id="web-based">
                <div className="ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://referralastramotor.com" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/referralastramotor.jpg" alt="Referral Astra Motor System"/>
                            <figcaption>
                              <div className="h4">Astra Motor Referral System</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://arvipi.com" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/asyst.png" alt="Arvipi-System"/>
                            <figcaption>
                              <div className="h4">Arvipi-System: Simple CMS</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://presidentylc.com" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/pylcwebsite.png" alt="PYLC"/>
                            <figcaption>
                              <div className="h4">PYLC's Website: Event's Registration System with auto-generated Invoice Letter</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://tanjunglesung.com" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/tlwebsite.png" alt="Tanjung Lesung"/>
                            <figcaption>
                              <div className="h4">Tanjung Lesung Website</div>
                              <p>Web-based Development (Under SimplyStudio)</p>
                            </figcaption>
                          </figure></a></div>
                    </div>
                    <div className="col-md-6">
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://pusc.or.id" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/pusc17front.jpg" alt="PUSC"/>
                            <figcaption>
                              <div className="h4">PUSC's Website: AdminPUSC, Frontpage, Online Borrowing System & Aspiration Form</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://pucomputing.org" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/pucomputingwebsite.png" alt="PUMA Computing 2017 Website"/>
                            <figcaption>
                              <div className="h4">PUMA Computing 2017 Website</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://project.arvipi.com/arpha" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/arpha.png" alt="Arpha"/>
                            <figcaption>
                              <div className="h4">Arpha: Simple Point Of Sale</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://project.arvipi.com/zahirulmaala" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/zmwebsite.png" alt="Zahirul Ma'ala"/>
                            <figcaption>
                              <div className="h4">Zahirul Ma'aala Website</div>
                              <p>Web-based Development</p>
                            </figcaption>
                          </figure></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="mobile-based" role="tabpanel">
                <div className="ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://pusc.or.id" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/mpusc.png" alt="M-PUSC"/>
                            <figcaption>
                              <div className="h4">M-PUSC: Progressive Web App </div>
                              <p>Mobile-based Development</p>
                            </figcaption>
                          </figure></a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a>
                          <figure className="cc-effect"><img src="https://cdn.epilepsynewstoday.com/wp-content/uploads/2017/05/shutterstock_528333016.jpg" alt="FindMe"/>
                            <figcaption>
                              <div className="h4">FindMe: Friends Location Tracker App (Discontinued)</div>
                              <p>Mobile-based Development</p>
                            </figcaption>
                          </figure></a></div>
                    </div>
                    <div className="col-md-6">
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://arvipi.com/sepik" target='_blank' rel="noopener noreferrer">
                          <figure className="cc-effect"><img src="https://rakha.arvipi.com/img/sepik.png" alt="Sepik"/>
                            <figcaption>
                              <div className="h4">Sepik: Text to Speech Mobile App</div>
                              <p>Mobile-based Development</p>
                            </figcaption>
                          </figure></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">Work Experience</div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>Oct 2017 - Feb 2018</p>
                    <div className="h5">BCA Learning Institute</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Vendor</div>
                    <p>Worked on making new E-learning using Moodle and setting up the server.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>Jan 2016 - Jan 2018</p>
                    <div className="h5">President University Student Council</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Front End Developer</div>
                    <p>Student legislative body. Responsible for creating and managing the website either for internal (AdminPUSC) or external (Frontpage, Online Borrowing System & Aspiration Form) needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>May 2017 - Jun 2017</p>
                    <div className="h5">CV. Simply Digital Studio</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Web Developer Intern</div>
                    <p>Helped to develop several on-running projects using CodeIgniter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>Nov 2013 - Jan 2014</p>
                    <div className="h5">Ikatan Ahli Teknik Penyehatan dan Teknik Lingkungan Jakarta</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Internship Staff</div>
                    <p>Helped on documenting stuff, etc. Created a modern looking website for IATPI using Joomla.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Education</div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-education-header">
                    <p>2015 - 2019 (Expected)</p>
                    <div className="h5">Bachelor's Degree</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Bachelor of Science in Information Technology (in Progress)</div>
                    <p className="category">President University</p>
                    <p>Worked on a variety of programming projects in teams.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-red" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-education-header">
                    <p>2012 - 2015</p>
                    <div className="h5">High School</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Software Engineering</div>
                    <p className="category">2 Vocational High School</p>
                    <p>Basic Java, VB, & Website Programming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="reference">
          <div className="container cc-reference">
            <div className="h4 mb-4 text-center title">Favourite Quotes</div>
            <div className="card" data-aos="zoom-in">
              <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li className="active" data-target="#cc-Indicators" data-slide-to="0"></li>
                  <li data-target="#cc-Indicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 cc-reference-header"><img src="https://i1.wp.com/www.yabaleftonline.ng/wp-content/uploads/2018/01/416x416.jpg" alt="Mark" className="rounded-circle"/>
                        <div className="h5 pt-2">Mark Zuckerberg</div>
                        <p className="category">Founder & CEO of Facebook</p>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <h4>"The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks."</h4>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 cc-reference-header"><img src="https://i1.wp.com/www.yabaleftonline.ng/wp-content/uploads/2018/01/416x416.jpg" alt="Zuckerberg" className="rounded-circle"/>
                        <div className="h5 pt-2">Mark Zuckerberg</div>
                        <p className="category">Founder & CEO of Facebook</p>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <h4>"I wear the same outfit or, at least, a different copy of it almost every day."</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="contact">
          <div className="cc-contact-information">
            <div className="container">
              <div className="cc-contact">
                <div className="row">
                  <div className="col-md-9">
                    <div className="card mb-0" data-aos="zoom-in">
                      <div className="h4 text-center title">Contact Me</div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body">
                            <form action="https://formspree.io/rakha@arvipi.com" method="POST">
                              <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="input-group"><span className="input-group-addon"><i className="fas fa-user-circle"></i></span>
                                    <input className="form-control" type="text" name="name" placeholder="Name" required="required"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="input-group"><span className="input-group-addon"><i className="fas fa-file-alt"></i></span>
                                    <input className="form-control" type="text" name="Subject" placeholder="Subject" required="required"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="input-group"><span className="input-group-addon"><i className="fas fa-envelope"></i></span>
                                    <input className="form-control" type="email" name="_replyto" placeholder="E-mail" required="required"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Your Message" required="required"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <button className="btn btn-red" type="submit">Send</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className="mb-0"><strong>Based on </strong></p>
                            <p className="pb-2">Jakarta, Indonesia</p>
                            <p className="mb-0"><strong>Phone</strong></p>
                            <p className="pb-2">+62 8963 224 8327</p>
                            <p className="mb-0"><strong>Email</strong></p>
                            <p>rakha@arvipi.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container text-center">
        <a className="cc-facebook btn btn-link" href="https://facebook.com/rakatonii" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
        <a className="cc-twitter btn btn-link" href="https://twitter.com/rakhaviantoni" target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
        <a className="cc-instagram btn btn-link" href="https://www.instagram.com/rakhaviantoni/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
        <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/rakhaviantoni/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
        <a className="cc-github btn btn-link" href="https://www.github.com/rakhaviantoni/" target='_blank' rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
        {/* <a className="cc-google-plus btn btn-link" href="https://plus.google.com/u/0/+RakhaViantoniPrastya/" target='_blank' rel="noopener noreferrer"><i className="fab fa-google-plus fa-2x"></i></a> */}
      </div>
      <div className="h4 title text-center">{combine(name)}</div>
      <div className="text-center text-muted">
        <p>&copy; <a href="https://arvipi.com">Arvipi</a>. All rights reserved.</p>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
