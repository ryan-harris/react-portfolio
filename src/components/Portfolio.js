import React from 'react';
import Project from './Project';
import projects from '../projects.json';

function Portfolio() {
  const renderProjects = () => {
    return projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  };

  return (
    <section id='portfolio' className='tm-portfolio'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 wow bounce'>
            <h2 className='tm-portfolio-title'>
              My <strong>Portfolio</strong>
            </h2>
            <div className='iso-section'>
              <div className='iso-box-section'>
                <div className='iso-box-wrapper col4-iso-box'>
                  {renderProjects()}
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
