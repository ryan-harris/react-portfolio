import React from 'react';

export default function Info() {
  return (
    <div className='col-md-6 col-sm-6'>
      <h2 className='title'>
        My <strong>Info</strong>
      </h2>
      <p>
        <span className='tm-info-label'>Name</span> Ryan Harris
      </p>
      <p>
        <span className='tm-info-label'>Location</span> San Diego, CA
      </p>
      <p>
        <span className='tm-info-label'>Phone</span> 760-415-7449
      </p>
      <p>
        <span className='tm-info-label'>Email</span> harris.ucla@gmail.com
      </p>
      <p>
        <span className='tm-info-label'>GitHub</span>{' '}
        <a href='https://github.com/ryan-harris' className='tm-red-text'>
          ryan-harris
        </a>
      </p>
      <p>
        <span className='tm-info-label'>LinkedIn</span>{' '}
        <a
          href='https://www.linkedin.com/in/harris-ryan/'
          className='tm-red-text'
        >
          linkedin.com/in/harris-ryan
        </a>
      </p>
      <p>
        <span className='tm-info-label'>Education</span> Bachelors in Computer
        Science, UCLA
      </p>
      <p>
        <span className='tm-info-label'>Resume</span>{' '}
        <a href='ryanharris.pdf' className='tm-red-text'>
          pdf
        </a>{' '}
        <a
          href='ryanharris.docx'
          style={{ marginLeft: '10px' }}
          className='tm-red-text'
        >
          docx
        </a>
      </p>
    </div>
  );
}
