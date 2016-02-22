/* @flow */
import React from 'react';
import { connect } from 'react-redux';
// import classes from './HomeView.scss';

export class HomeView extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div className='container text-center'>
        <div className='jumbotron'>
          <h1>Warner Christmas</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});
export default connect((mapStateToProps), {
})(HomeView);
