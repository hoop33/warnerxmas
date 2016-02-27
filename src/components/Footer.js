import React from 'react';

export default class Footer extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <footer>
        <nav className='navbar navbar-default navbar-fixed-bottom'>
          <div className='container'>

            <p className='navbar-text navbar-left'>
              Warner Christmas
            </p>

            <p className='navbar-text navbar-right'>
              &copy; {new Date().getFullYear()} The Warner Family
            </p>

          </div>
        </nav>
      </footer>
    );
  }
};

