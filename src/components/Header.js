import React from 'react';

function Header() {
  return (
    <div
      className='navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation'
      role='navigation'
    >
      <div className='container'>
        <div className='navbar-header'>
          <button
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='#rock-navigation'
          >
            <span className='icon icon-bar' />
            <span className='icon icon-bar' />
            <span className='icon icon-bar' />
          </button>
          <a href='#' className='navbar-brand'>
            Ryan Harris
          </a>
        </div>
        <nav className='collapse navbar-collapse' id='rock-navigation'>
          <ul className='nav navbar-nav navbar-right main-navigation text-uppercase'>
            <li>
              <a href='#home' className='smoothScroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#portfolio' className='smoothScroll'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#resume' className='smoothScroll'>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
