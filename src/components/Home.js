import React from 'react';

function Home() {
  return (
    <section id='home' className='home'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2 col-sm-1' />
          <div className='col-md-8 col-sm-10'>
            <h1 className='tm-home-title'>
              <strong>Ryan Harris</strong>
            </h1>
            <h2 className='tm-home-subtitle'>Software Developer</h2>
            <p>
              Professional <strong>Full Stack Web Developer</strong> with a
              passion for creating innovative and optimized solutions.
            </p>
            <a
              href='#portfolio'
              className='btn btn-default smoothScroll tm-view-more-btn'
            >
              Let's Begin
            </a>
          </div>
          <div className='col-md-2 col-sm-1' />
        </div>
      </div>
    </section>
  );
}

export default Home;
