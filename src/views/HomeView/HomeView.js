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
    return (
      <div className='container text-center'>
        <h1>Warner Christmas {this.props.year}</h1>
        <GiftList year={this.props.year}/>
        <h1>Last Year ({this.props.year - 1})</h1>
        <GiftList year={this.props.year - 1}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  year: state.schedule.year
});

export default connect((mapStateToProps), {
})(HomeView);
