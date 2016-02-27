import {
  default as scheduleReducer
} from 'redux/modules/schedule'

describe('(Redux Module) Schedule', function () {

  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(scheduleReducer).to.be.a('function')
    });

    it('Should have siblings.', function () {
      expect(scheduleReducer().siblings.length).to.be.greaterThan(0);
    });

    it('Should have a year greater than 2000.', function () {
      expect(scheduleReducer().year).to.be.greaterThan(2000);
    });

    it('Should have a reference year greater than 2000.', function () {
      expect(scheduleReducer().referenceYear).to.be.greaterThan(2000);
    });
  });
});
