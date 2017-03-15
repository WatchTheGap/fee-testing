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
        it('should handle an argument that is not an array', function () {
          let result = window.calc.sum('1');
          expect(result).to.be.NaN;
        });
        it('should handle an empty array', function () {
          let result = window.calc.sum([]);
          expect(result).to.equal(0);
        });
        // it('should handle an array that contains values that are not numbers', function () {
        //   let result = window.be.sum(['a', 'b']);
        //   expect(result).to.equal('ab');
        // });
      });

    });

    describe('factorial tests', function () {
      it('should return the factorial of the given number', function () {
        let result = window.calc.factorial(1);
        expect(result).to.be.a('number');
      });
    });


})();
