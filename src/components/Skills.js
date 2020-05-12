import React from 'react';

export default function Skills() {
  return (
    <div className='col-md-6 col-sm-6'>
      <h2 className='title'>
        My <strong>Skills</strong>
      </h2>
      <p>
        These are my primary skill areas. See my{' '}
        <a href='ryanharris.pdf' className='tm-red-text'>
          resume
        </a>{' '}
        for a more complete list of skills.
      </p>
      <h4 className='skill-left'>
        JavaScript <span className='skill-right'>Git</span>
      </h4>
      <h4 className='skill-left'>
        Java <span className='skill-right'>Express</span>
      </h4>
      <h4 className='skill-left'>
        Node.JS <span className='skill-right'>jQuery</span>
      </h4>
      <h4 className='skill-left'>
        React <span className='skill-right'>Mongo</span>
      </h4>
      <h4 className='skill-left'>
        HTML/CSS <span className='skill-right'>MySQL</span>
      </h4>
    </div>
  );
}
