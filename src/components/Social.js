import React from 'react';

function Social() {
  return (
    <section id='social' className='tm-social'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-6 col-sm-6 wow rotateInUpLeft'
            data-wow-delay='0.3s'
          >
            <div className='media github'>
              <a href='https://github.com/ryan-harris'>
                <div className='media-object pull-left'>
                  <i className='fa fa-github' />
                </div>
                <div className='media-body'>
                  <h4 className='media-heading tm-social-title'>
                    Check out my
                  </h4>
                  <h3>GitHub</h3>
                </div>
              </a>
            </div>
          </div>
          <div
            className='col-md-6 col-sm-6 wow rotateInUpLeft'
            data-wow-delay='0.6s'
          >
            <div className='media linkedin'>
              <a href='https://www.linkedin.com/in/harris-ryan/'>
                <div className='media-object pull-left'>
                  <i className='fa fa-linkedin' />
                </div>
                <div className='media-body'>
                  <h4 className='media-heading tm-social-title'>
                    Connect with me
                  </h4>
                  <h3>LinkedIn</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
