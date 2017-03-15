(function() {
    'use strict';

    // TODO: Your tests go here!

    let expect = chai.expect;

    describe('calculator tests', function () {
      describe('sum test', function () {
        it('should add all of the numbers in the array provided', function () {
          let result = window.calc.sum([1,2,3]);
          expect(result).to.equal(6);
          expect(result).to.be.a('number');
        });
        it('should handle no arguments', function () {
          let result = window.calc.sum();
          expect(result).to.equal(0);
        });
      });

    });



})();
