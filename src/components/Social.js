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
            <a
              href='https://github.com/ryan-harris'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='media github'>
                <div className='media-object pull-left'>
                  <i className='fa fa-github' />
                </div>
                <div className='media-body'>
                  <h4 className='media-heading tm-social-title'>
                    Check out my
                  </h4>
                  <h3>GitHub</h3>
                </div>
              </div>
            </a>
          </div>
          <div
            className='col-md-6 col-sm-6 wow rotateInUpLeft'
            data-wow-delay='0.6s'
          >
            <a
              href='https://www.linkedin.com/in/harris-ryan/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='media linkedin'>
                <div className='media-object pull-left'>
                  <i className='fa fa-linkedin' />
                </div>
                <div className='media-body'>
                  <h4 className='media-heading tm-social-title'>
                    Connect with me
                  </h4>
                  <h3>LinkedIn</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
