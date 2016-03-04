import React, { PropTypes } from 'react';
import calculateScheduleForYear from '../redux/utils/calculateScheduleForYear';
import { connect } from 'react-redux';

type Props = {
  opening: string,
  year: number,
  referenceYear: number,
  siblings: Array
}

export class GiftList extends React.Component<void, Props, void> {
  static propTypes = {
    opening: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    referenceYear: PropTypes.number.isRequired,
    siblings: PropTypes.array.isRequired
  }

  render () {
    var schedule = calculateScheduleForYear(this.props.year, this.props.referenceYear, this.props.siblings);
    var verb = this.props.year === new Date().getFullYear() ? 'gives' : 'gave';

    return (
      <div className='row giftlist'>
        <div className='opening'>
          {this.props.opening},
        </div>
        {this.props.siblings.map(function (sibling, index, siblings) {
          var lineBeginning = index < siblings.length - 1 ? '' : 'and ';
          var lineEnding = index < siblings.length - 1 ? ',' : '.';
          return (
            <div key={sibling}>
              <span className='message'>
                {lineBeginning}
              </span>
              <span className='giver'>
                {sibling}
              </span>
              <span className='message'>
                &nbsp;{verb} to&nbsp;
              </span>
              <span className='receiver'>
                Jonathan
              </span>
              <span className='message'>
                {lineEnding}
              </span>
            </div>
          );
        })}
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
