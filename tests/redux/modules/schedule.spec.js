import {
  default as scheduleReducer
} from 'redux/modules/schedule'

describe('(Redux Module) Schedule', function () {

  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(scheduleReducer).to.be.a('function')
    });
  });
});
