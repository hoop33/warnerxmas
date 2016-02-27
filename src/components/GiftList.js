import React, { PropTypes } from 'react';
import calculateScheduleForYear from '../redux/utils/calculateScheduleForYear';
import { connect } from 'react-redux';

type Props = {
  year: number,
  referenceYear: number,
  siblings: Array
}

export class GiftList extends React.Component<void, Props, void> {
  static propTypes = {
    year: PropTypes.number.isRequired,
    referenceYear: PropTypes.number.isRequired,
    siblings: PropTypes.array.isRequired
  }

  render () {
    var schedule = calculateScheduleForYear(this.props.year, this.props.referenceYear, this.props.siblings);

    return (
      <div className='container'>
        <div className='row'>

          <table className='table table-striped'>

            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>

            <tbody>
              {this.props.siblings.map(function (sibling) {
                return (
                  <tr key={sibling}>
                    <td>{sibling}</td>
                    <td>{schedule[sibling]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  referenceYear: state.schedule.referenceYear,
  siblings: state.schedule.siblings
});

export default connect((mapStateToProps), {
})(GiftList);
