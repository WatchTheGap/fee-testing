(function() {
    'use strict';

    window.calc = window.calc || {};

    /**
     * Adds whatever numbers are provided and returns the total
     * @param  {Array} numbers  The numbers to add together
     * @return {Number}         The total of all numbers
     */
    window.calc.sum = function sum(numbers = []) {
        let total = 0;

        if (!numbers) {
            return total;
        }
        if (!Array.isArray(numbers)) {
          return NaN;
        }
        if (numbers.length === 0) {
          return total;
        }

        numbers.forEach(function addThem(num) {


          total += num;
        });

        return total;

    };

    /**
     * Returns the factorial for the given number which is defined as:
     *    1 * 2 * 3 * ... * topNumber
     *    For example, if the number is 5, the factorial would be:
     *    1 * 2 * 3 * 4 * 5 = 120
     * @param  {Number} topNumber  The number to get the factorial value for
     * @return {Number}            The final factorial value
     */
    window.calc.factorial = function factorial(topNumber) {
        let total = 0;

        if (typeof(topNumber) !== 'number') {
            return NaN;
        }

        for (let i = 1; i <= topNumber; i++) {
          return total *= i;
        }

        return total;
    };

})();
