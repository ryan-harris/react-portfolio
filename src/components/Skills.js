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
      <h4 className='tm-progress-label'>
        JavaScript <small className='progress-percent-small'>90%</small>
      </h4>
      <div className='progress tm-progress'>
        <div
          className='progress-bar progress-bar-danger'
          role='progressbar'
          aria-valuenow={90}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '90%' }}
        />
      </div>
      <h4 className='tm-progress-label'>
        Java <small className='progress-percent-small'>90%</small>
      </h4>
      <div className='progress tm-progress'>
        <div
          className='progress-bar progress-bar-danger'
          role='progressbar'
          aria-valuenow={90}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '90%' }}
        />
      </div>
      <h4 className='tm-progress-label'>
        Node.JS <small className='progress-percent-small'>80%</small>
      </h4>
      <div className='progress tm-progress'>
        <div
          className='progress-bar progress-bar-danger'
          role='progressbar'
          aria-valuenow={80}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '80%' }}
        />
      </div>
      <h4 className='tm-progress-label'>
        React <small className='progress-percent-small'>75%</small>
      </h4>
      <div className='progress tm-progress'>
        <div
          className='progress-bar progress-bar-danger'
          role='progressbar'
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '75%' }}
        />
      </div>
      <h4 className='tm-progress-label'>
        HTML/CSS <small className='progress-percent-small'>70%</small>
      </h4>
      <div className='progress tm-progress'>
        <div
          className='progress-bar progress-bar-danger'
          role='progressbar'
          aria-valuenow={70}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: '70%' }}
        />
      </div>
    </div>
  );
}
