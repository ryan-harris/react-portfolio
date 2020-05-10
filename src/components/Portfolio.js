import React from 'react';

function Portfolio() {
  return (
    <section id='portfolio' className='tm-portfolio'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 wow bounce'>
            <div className='title'>
              <h2 className='tm-portfolio-title'>
                My <strong>Portfolio</strong>
              </h2>
            </div>
            <div className='iso-section'>
              <div className='iso-box-section'>
                <div className='iso-box-wrapper col4-iso-box'>
                  <div className='iso-box html photoshop wordpress mobile col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/ghport.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>
                          Github Portfolio Builder
                        </h3>
                        <a href='https://ghport.herokuapp.com/' className='btn'>
                          Demo
                        </a>
                        <a
                          href='https://github.com/ryan-harris/portfolio-builder'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='iso-box html wordpress mobile col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/covid19.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>
                          Covid-19 Tracker
                        </h3>
                        <a
                          href='https://jkaplanis.github.io/covid19-tracker/'
                          className='btn'
                        >
                          Demo
                        </a>
                        <a
                          href='https://github.com/jkaplanis/covid19-tracker'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='iso-box wordpress col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/weathernow.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>Weather Now!</h3>
                        <a
                          href='https://ryan-harris.github.io/weather-dashboard/'
                          className='btn'
                        >
                          Demo
                        </a>
                        <a
                          href='https://github.com/ryan-harris/weather-dashboard'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='iso-box html mobile col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/dayplanner.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>Day Planner</h3>
                        <a
                          href='https://ryan-harris.github.io/day-planner/'
                          className='btn'
                        >
                          Demo
                        </a>
                        <a
                          href='https://github.com/ryan-harris/day-planner'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='iso-box wordpress col-md-3 col-sm-3'></div>
                  <div className='iso-box wordpress col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/notetaker.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>Note Taker</h3>
                        <a
                          href='https://vast-meadow-13571.herokuapp.com/'
                          className='btn'
                        >
                          Demo
                        </a>
                        <a
                          href='https://github.com/ryan-harris/note-taker'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='iso-box html photoshop col-md-3 col-sm-3 col-xs-12'>
                    <div className='portfolio-thumb'>
                      <img
                        src='images/burgerlogger.png'
                        className='fluid-img'
                        alt='portfolio img'
                      />
                      <div className='portfolio-overlay'>
                        <h3 className='portfolio-item-title'>Burger Logger</h3>
                        <a
                          href='https://pure-inlet-39981.herokuapp.com/'
                          className='btn'
                        >
                          Demo
                        </a>
                        <a
                          href='https://github.com/ryan-harris/burger-logger'
                          className='btn'
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
