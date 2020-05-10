import React from 'react';
import Skills from './Skills';
import Info from './Info';

function Resume() {
  return (
    <section id='resume' className='tm-padding-top-bottom-100'>
      <div className='container'>
        <div className='row'>
          <Info />
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default Resume;
