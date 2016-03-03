/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GiftList from '../../components/GiftList';
// import classes from './HomeView.scss';

type Props = {
  year: number
}

export class HomeView extends React.Component<void, Props, void> {
  static propTypes = {
    year: PropTypes.number.isRequired
  }

  render () {
    var opening = 'For Christmas ' + this.props.year;
    return (
      <div className='container text-center'>
        <h1>Warner Christmas</h1>
        <GiftList opening={opening} year={this.props.year}/>
        <GiftList opening='Last year' year={this.props.year - 1}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  year: state.schedule.year
});

export default connect((mapStateToProps), {
})(HomeView);
