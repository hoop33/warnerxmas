import {
  default as calculateScheduleForYear
} from 'redux/utils/calculateScheduleForYear'

describe('Calculate Schedule', function () {
  it('Should be a function.', function () {
    expect(calculateScheduleForYear).to.be.a('function');
  });

  it('Should return the next sibling when year is reference year.', function () {
    var schedule = calculateScheduleForYear(2000, 2000, ['a', 'b', 'c']);
    expect(schedule['a']).to.equal('b');
    expect(schedule['b']).to.equal('c');
    expect(schedule['c']).to.equal('a');
  });

  it('Should wrap around.', function () {
    var schedule = calculateScheduleForYear(2016, 2014, ['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    expect(schedule['a']).to.equal('d');
    expect(schedule['b']).to.equal('e');
    expect(schedule['c']).to.equal('f');
    expect(schedule['d']).to.equal('g');
    expect(schedule['e']).to.equal('a');
    expect(schedule['f']).to.equal('b');
    expect(schedule['g']).to.equal('c');
  });

  it('Should wrap around multiple times.', function () {
    var schedule = calculateScheduleForYear(2009, 2000, ['a', 'b', 'c']);
    expect(schedule['a']).to.equal('c');
    expect(schedule['b']).to.equal('a');
    expect(schedule['c']).to.equal('b');
  });
});

