(function() {
    'use strict';

    // TODO: Your tests go here!

    let expect = chai.expect;

    describe('calculator tests', function () {
      describe('sum test', function () {
        it('should add all of the numbers in the array provided', function () {
          let result = window.calc.sum([1]);
          expect(result).to.equal(1);
        });
      });

    });



})();
