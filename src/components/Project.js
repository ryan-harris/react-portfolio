import React from 'react';

export default function Project({ project }) {
  return (
    <div className='iso-box html photoshop wordpress mobile col-md-3 col-sm-3 col-xs-12'>
      <div className='portfolio-thumb'>
        <img src={project.image} className='fluid-img' alt='portfolio img' />
        <div className='portfolio-overlay'>
          <h3 className='portfolio-item-title'>{project.name}</h3>
          <div className='row mx-n2'>
            <a href={project.demo} className='btn col' target='_blank'>
              Demo
            </a>
            <a href={project.repo} className='btn col ml-2' target='_blank'>
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
