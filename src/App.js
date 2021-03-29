function activateLasers(data) {
  setTimeout(function () {
    disableAll();
    if (data === 'home') {
      document.getElementById("home").style.display = "block";
    }
    if (data === 'about') {
      document.getElementById("about").style.display = "block";
    }
    if (data === 'resume') {
      document.getElementById("resume").style.display = "block";
    }
    if (data === 'portfolio') {
      document.getElementById("portfolio").style.display = "block";
    }
    if (data === 'contact') {
      document.getElementById("contact").style.display = "block";
    }
  }, 500);
}

function disableAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("resume").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function App() {
  return (
    <div>
      <div className="page">
        <div className="page-content">
          <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
              <div className="header-photo">
                <img src="img/main_photo.jpg" alt="Dennis Chebon" />
              </div>
              <div className="header-titles">
                <h2>Dennis Chebon</h2>
                <h4>Web Designer</h4>
              </div>
            </div>

            <ul className="main-menu">
              <li className="active" onClick={() => activateLasers("home")}>
                <a href="#home" className="nav-anim">
                  <span className="menu-icon lnr lnr-home"></span>
                  <span className="link-text">Home</span>
                </a>
              </li>
              <li>
                <a href="#about-me" onClick={() => activateLasers("about")} className="nav-anim">
                  <span className="menu-icon lnr lnr-user"></span>
                  <span className="link-text">About Me</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-anim" onClick={() => activateLasers("resume")}>
                  <span className="menu-icon lnr lnr-graduation-hat"></span>
                  <span className="link-text">Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-anim" onClick={() => activateLasers("portfolio")}>
                  <span className="menu-icon lnr lnr-briefcase"></span>
                  <span className="link-text">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-anim" onClick={() => activateLasers("contact")}>
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">Contact</span>
                </a>
              </li>
            </ul>

            <div className="social-links">
              <ul>
                <li><a href="https://www.linkedin.com/in/dennis-chebon/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/chebon/" target="_blank"><i className="fab fa-github"></i></a></li>
              </ul>
            </div>

            <div className="header-buttons">
              <a href="/#" target="_blank" className="btn btn-primary">Download CV</a>
            </div>

            <div className="copyrights">© 2021 All rights reserved.</div>
          </header>



          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="content-area">
            <div className="animated-sections">

              <section data-id="home" id="home" className="animated-section start-page">
                <div className="section-content vcentered">

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="title-block">
                        <h2>Dennis Chebon</h2>
                        <div className="owl-carousel text-rotation">
                          <div className="item">
                            <div className="sp-subtitle">Web Designer</div>
                          </div>

                          <div className="item">
                            <div className="sp-subtitle">Fullstack-developer</div>
                          </div>
                          <div className="item">
                            <div className="sp-subtitle">Computer Scientist</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section data-id="about-me" id="about" className="animated-section">
                <div className="page-title">
                  <h2>About <span>Me</span></h2>
                </div>

                <div className="section-content">

                  <div className="row">
                    <div className="col-xs-12 col-sm-7">
                      <p>
                        A mid-level developer with a flair for creating elegant solutions in the least amount of time.
                        My main objective is to gain the position of a programmer in an IT company that can provide me
                        with an opportunity to work on several challenging projects and make the websites operate flawlessly.
                        Excellent ability to align teams and drive collaboration and cohesion to complete projects in a timely
                        and cost-effective manner. I have a strong understanding of diverse business intelligence methodologies
                        to improve workflow, productivity and reliability. I demonstrate strong interpersonal communication skills
                        and an excellent team player with strong. I am Passionate about software architecture and cloud computing.
                      </p>
                    </div>

                    <div className="col-xs-12 col-sm-5">
                      <div className="info-list">
                        <ul>
                          <li>
                            <span className="title">Residence</span>
                            <span className="value">Kenya</span>
                          </li>

                          <li>
                            <span className="title">Location</span>
                            <span className="value">Nairobi</span>
                          </li>

                          <li>
                            <span className="title">e-mail</span>
                            <span className="value">chebon85@gmail.com</span>
                          </li>

                          <li>
                            <span className="title">Phone</span>
                            <span className="value">+254 729 333 911</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="white-space-50"></div>


                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>What <span>I Do</span></h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="col-inner">
                        <div className="info-list-w-icon">
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-rocket"></i>
                            </div>
                            <div className="ci-text">
                              <h4>Web Development</h4>
                              <p>
                                Award-winning web developer with 5+ years of well rounded in LAMP development, object-oriented and user-centered design.
                              </p>
                            </div>
                          </div>
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-laptop-phone"></i>
                            </div><div className="ci-text">
                              <h4>Web Design</h4>
                              <p>
                                Highly seasoned and reliable Entry Level Web Designer with a strong work ethic and customer service and satisfaction record. Adept multitasker capable of bringing simultaneous web page creation and repair projects to completion with full accuracy and efficiency. Able to function well independently with little to no supervision or in coordination with a professional electronic media team.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                      <div className="col-inner">
                        <div className="info-list-w-icon">
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-calendar-full"></i>
                            </div>
                            <div className="ci-text">
                              <h4>Project Managment</h4>
                              <p>
                                Astrue business operation in relation to a particular project focusing on supporting cross-functional team to increase customer satisfaction through process improvement.Respectful and respected professional with exceptional knowledge of developing strategies plans for service excellence
                              </p>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="white-space-30"></div>





                  <div className="white-space-50"></div>





                  <div className="white-space-50"></div>




                </div>
              </section>

              <section data-id="resume" id="resume" className="animated-section">
                <div className="page-title">
                  <h2>Resume</h2>
                </div>

                <div className="section-content">

                  <div className="row">
                    <div className="col-xs-12 col-sm-7">

                      <div className="block-title">
                        <h3>Education</h3>
                      </div>

                      <div className="timeline timeline-second-style clearfix">
                        <div className="timeline-item clearfix">
                          <div className="left-part">
                            <h5 className="item-period">2012 - 2015</h5>
                            <span className="item-company">Kabarak University</span>
                          </div>

                          <div className="right-part">
                            <h4 className="item-title">Computer Science</h4>
                            <p>
                              Concentrated on data structures and algorithm optimization and architecture by using computer infrastructure to optimize business processes and ensure smooth operations.
                            </p>
                            <p>
                              Developed a home automation prototype; an IOT based project using Raspberry pi, Webiopi and python programming language.
                            </p>
                          </div>
                        </div>


                      </div>

                      <div className="white-space-50"></div>

                      <div className="block-title">
                        <h3>Experience</h3>
                      </div>

                      <div className="timeline timeline-second-style clearfix">
                        <div className="timeline-item clearfix">
                          <div className="left-part">
                            <h5 className="item-period">sept 2017 - </h5>
                            <span className="item-company">Socialight Media</span>
                          </div>
                          <div className="divider"></div>
                          <div className="right-part">
                            <h4 className="item-title">Web Developer</h4>
                            <ul>
                              <li>
                                Migrating monolithic applications to a microservices approach to facilitate maintainability and efficiency
                              </li>
                              <li>
                                Worked with business and design requirements to develop web pages that adhered to company, industry and usability standards.
                              </li>
                              <li>
                                Ensured site design integrity and quality control consistency throughout the project's lifecycle.
                              </li>
                              <li>
                                Used Web services (SOAP and RESTful) for transmission of large blocks of XML/JSON.
                              </li>
                              <li>
                                Conduct data analytics to aid better decision making within the management team
                              </li>
                              <li>
                                Supporting production environments and meeting customer needs
                              </li>
                              <li>
                                Modified existing software to correct errors, adapt to new hardware and improve performance
                              </li>
                              <li>
                                Developing automated test
                              </li>
                              <li>
                                Developed RESTful web applications using Laravel, Django, and Node.js.
                              </li>
                              <li>
                                Valuate potential software products based on new and existing system development and migration requirements.
                              </li>
                              <li>
                                Developed multi-user web applications based on the Laravel framework (Php).
                              </li>
                              <li>
                                Developed code fixes and enhancements for inclusion in future code releases and patches.
                              </li>
                              <li>
                                Identified and suggested new technologies and tools for enhancing product value and increasing team productivity.
                              </li>

                            </ul>
                          </div>
                        </div>

                        <div className="timeline-item clearfix">
                          <div className="left-part">
                            <h5 className="item-period">2016 - 2017</h5>
                            <span className="item-company">Buyrentkenya</span>
                          </div>
                          <div className="divider"></div>
                          <div className="right-part">
                            <h4 className="item-title">Web Developer</h4>
                            <ul>
                              <li>Development of a back office to perform real-time listings updates on the new website.</li>
                              <li>
                                Used Object Oriented Programming concepts to develop components that could be reused across the Web Application.
                              </li>
                              <li>
                                Involved in Unit, Integration and System Test and maintain the application.
                              </li>
                              <li>
                                Applied optimization techniques to reduce page size and load times to enhance user experience.
                              </li>
                              <li>
                                Experience in developing and deploying applications through AWS.
                              </li>
                              <li>
                                Worked with the build tools like Jenkins
                              </li>
                              <li>
                                Reated HTML marketing email templates for; Constant Contact, MailChimp, Aweber, etc.
                              </li>
                              <li>
                                Developed various Apis to be utilized by Buyrentkenya partners to fetch listings from the platform
                              </li>
                              <li>
                                To boost the SEO performance the Buyrentkenya blog had to be developed within the new website. Worked on Integrated WordPress CMS
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="timeline-item clearfix">
                          <div className="left-part">
                            <h5 className="item-period">2014 - 2015</h5>
                            <span className="item-company">Emed Kenya</span>
                          </div>
                          <div className="divider"></div>
                          <div className="right-part">
                            <h4 className="item-title">Junior Developer</h4>
                            <ul>
                              <li>Gathered and analyzed the requirements and converted them into User Requirement Specifications and Functional Requirement Specifications</li>
                              <li>
                                Extensively used Git for version controlling and regularly pushed code to the repository.
                              </li>
                              <li>
                                Worked on creating responsive website for smart devices using Responsive design and media queries.
                              </li>
                              <li>
                                Preparing flowcharts, use case stories and UML diagram
                              </li>
                              <li>
                                Development of new platform using Laravel framework (v 4.2)
                              </li>
                              <li>
                                Implemented changes based on users feedback
                              </li>
                              <li>
                                Preparing documentation for the new system developed
                              </li>
                              <li>
                                Training users on how to use the new platform
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div className="col-xs-12 col-sm-5">


                      <div className="white-space-10"></div>


                      <div className="block-title">
                        <h3>Coding <span>Skills</span></h3>
                      </div>

                      <div className="skills-info skills-second-style">

                        <div className="skill clearfix">
                          <h4>JavaScript</h4>
                          <div className="skill-value">95%</div>
                        </div>
                        <div className="skill-container skill-5">
                          <div className="skill-percentage"></div>
                        </div>

                        <div className="skill clearfix">
                          <h4>PHP</h4>
                          <div className="skill-value">85%</div>
                        </div>
                        <div className="skill-container skill-6">
                          <div className="skill-percentage"></div>
                        </div>

                        <div className="skill clearfix">
                          <h4>Golang</h4>
                          <div className="skill-value">100%</div>
                        </div>
                        <div className="skill-container skill-7">
                          <div className="skill-percentage"></div>
                        </div>

                        <div className="skill clearfix">
                          <h4>Django</h4>
                          <div className="skill-value">75%</div>
                        </div>
                        <div className="skill-container skill-8">
                          <div className="skill-percentage"></div>
                        </div>

                        <div className="skill clearfix">
                          <h4>Node.JS</h4>
                          <div className="skill-value">90%</div>
                        </div>
                        <div className="skill-container skill-9">
                          <div className="skill-percentage"></div>
                        </div>

                      </div>


                      <div className="white-space-10"></div>


                      <div className="block-title">
                        <h3>Knowledges</h3>
                      </div>

                      <ul className="knowledges">
                        <li>Laravel</li>
                        <li>MySQL</li>
                        <li>Redis</li>
                        <li>PostgreSQL </li>
                        <li>Mongo db</li>
                        <li>React JS</li>
                        <li>AJAX </li>
                        <li>Node.js</li>
                        <li>Git</li>
                        <li>Project Managment</li>
                        <li>OOPS</li>
                        <li>Bootstrap</li>
                        <li>Jquery</li>
                        <li>Linux</li>
                        <li>Apache</li>
                      </ul>

                    </div>

                  </div>

                  <div className="white-space-50"></div>

                </div>
              </section>

              <section data-id="portfolio" id="portfolio" className="animated-section">
                <div className="page-title">
                  <h2>Portfolio</h2>
                </div>

                <div className="section-content">

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="portfolio-content">

                        <ul className="portfolio-filters">
                          <li className="active">
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                          </li>
                          <li>
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_detailed">Laravel</a>
                          </li>
                          <li>
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_mockups">Golang</a>
                          </li>
                          <li>
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_soundcloud">Python</a>
                          </li>
                          <li>
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_vimeowORDPRESS-videos">React</a>
                          </li>
                          <li>
                            <a href="/#" className="filter btn btn-sm btn-link" data-group="category_youtube-videos">Wordpress</a>
                          </li>
                        </ul>


                        <div className="portfolio-grid three-columns">

                          <figure className="item lbimage" data-groups='["category_all", "category_mockups"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/5.png" alt="PDU Delivery" title="" />
                              <a className="lightbox" title="PDU Delivery" href="img/portfolio1/5.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">PDU Delivery</h4>
                            <span className="category">PDU Delivery</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/2.png" alt="Mgrush" title="" />
                              <a className="lightbox" title="Mgrush" href="img/portfolio1/2.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Mgrush</h4>
                            <span className="category">Mockups</span>
                          </figure>


                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/1.png" alt="LastMinuteMara" title="LastMinuteMara" />
                              <a className="lightbox" title="Mgrush" href="img/portfolio1/2.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">LastMinuteMara</h4>
                            <span className="category">LastMinuteMara</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/3.jpg" alt="Miadi" title="Miadi" />
                              <a className="lightbox" title="Miadi" href="img/portfolio1/3.jpg">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Miadi</h4>
                            <span className="category">Miadi</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/4.png" alt="MoonLight Travel Business Travel Slider" title="MoonLight Travel Business Travel Slider" />
                              <a className="lightbox" title="MoonLight Travel Business Travel Slider" href="img/portfolio1/4.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Moonlight Travel</h4>
                            <span className="category">Moonlight Travel</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/6.png" alt="Pope Francis in Kenya" title="Pope Francis in Kenya" />
                              <a className="lightbox" title="Pope Francis in Kenya" href="img/portfolio1/6.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Pope Francis in Kenya</h4>
                            <span className="category">Pope Francis in Kenya</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/7.png" alt="Buyrentkenya" title="Buyrentkenya" />
                              <a className="lightbox" title="Buyrentkenya" href="img/portfolio1/7.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Buyrentkenya</h4>
                            <span className="category">Buyrentkenya</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/8.png" alt="Agpo" title="Agpo" />
                              <a className="lightbox" title="Agpo" href="img/portfolio1/8.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Agpo</h4>
                            <span className="category">Agpo</span>
                          </figure>


                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/9.png" alt="President KE" title="President KE" />
                              <a className="lightbox" title="President KE" href="img/portfolio1/9.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">President KE</h4>
                            <span className="category">President KE</span>
                          </figure>


                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/11.jpeg" alt="Choose Kenya" title="Choose Kenya" />
                              <a className="lightbox" title="Choose Kenya" href="img/portfolio1/11.jpeg">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Choose Kenya</h4>
                            <span className="category">Choose Kenya</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/10.png" alt="Vison 2030 Kenya" title="Vison 2030 Kenya" />
                              <a className="lightbox" title="Vison 2030 Kenya" href="img/portfolio1/10.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Vison 2030 Kenya</h4>
                            <span className="category">Vison 2030 Kenya</span>
                          </figure>

                          <figure className="item lbimage" data-groups='["category_all", "category_detailed"]'>
                            <div className="portfolio-item-img">
                              <img src="img/portfolio1/12.png" alt="Uhuru Kenyatta" title="Uhuru Kenyatta" />
                              <a className="lightbox" title="Uhuru Kenyatta" href="img/portfolio1/12.png">

                              </a>
                            </div>

                            <i className="far fa-image"></i>
                            <h4 className="name">Uhuru Kenyatta</h4>
                            <span className="category">Uhuru Kenyatta</span>
                          </figure>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
              <section data-id="contact" id="contact" className="animated-section">
                <div className="page-title">
                  <h2>Contact</h2>
                </div>

                <div className="section-content">

                  <div className="row">

                    <div className="col-xs-12 col-sm-4">
                      <div className="lm-info-block gray-default">
                        <i className="lnr lnr-map-marker"></i>
                        <h4>Nairobi</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                      </div>

                      <div className="lm-info-block gray-default">
                        <i className="lnr lnr-phone-handset"></i>
                        <h4>(+254) 729 333 911</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                      </div>

                      <div className="lm-info-block gray-default">
                        <i className="lnr lnr-envelope"></i>
                        <h4>chebon85@gmail.com</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                      </div>

                      <div className="lm-info-block gray-default">
                        <i className="lnr lnr-checkmark-circle"></i>
                        <h4>Freelance Available</h4>
                        <span className="lm-info-block-value"></span>
                        <span className="lm-info-block-text"></span>
                      </div>


                    </div>

                    <div className="col-xs-12 col-sm-8">
                      <div id="map" className="map"></div>
                      <div className="block-title">
                        <h3>How Can I <span>Help You?</span></h3>
                      </div>

                      <form id="contact_form" className="contact-form" action="https://lmpixels.com/demo/breezycv/light/1/contact_form/contact_form.php" method="post">

                        <div className="messages"></div>

                        <div className="controls two-columns">
                          <div className="fields clearfix">
                            <div className="left-column">
                              <div className="form-group form-group-with-icon">
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="" required="required" data-error="Name is required." />
                                <label>Full Name</label>
                                <div className="form-control-border"></div>
                                <div className="help-block with-errors"></div>
                              </div>

                              <div className="form-group form-group-with-icon">
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                <label>Email Address</label>
                                <div className="form-control-border"></div>
                                <div className="help-block with-errors"></div>
                              </div>

                              <div className="form-group form-group-with-icon">
                                <input id="form_subject" type="text" name="subject" className="form-control" placeholder="" required="required" data-error="Subject is required." />
                                <label>Subject</label>
                                <div className="form-control-border"></div>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="right-column">
                              <div className="form-group form-group-with-icon">
                                <textarea id="form_message" name="message" className="form-control" placeholder="" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                                <label>Message</label>
                                <div className="form-control-border"></div>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>

                          <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

                          <input type="submit" className="button btn-send" value="Send message" />
                        </div>
                      </form>
                    </div>

                  </div>

                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
