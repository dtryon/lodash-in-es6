/*
 * _.differenceWith(array, [values], [comparator]) : This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. Result values are chosen from the first array. The comparator is invoked with two arguments:
(arrVal, othVal).
 *
 */

import {expect} from 'chai';

describe('differenceBy', () => {

    it('inline can be done with reduce', () => {

        // _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        // ➜ [1.2]

        const filter = [2.3, 3.4].map(Math.floor);
        const result = [2.1, 1.2].reduce((acc, next) => filter.includes(Math.floor(next)) ? acc : acc.push(next) && acc, []);

        expect(result).to.deep.equal([1.2]);
    });


});




