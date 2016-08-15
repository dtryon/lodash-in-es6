/*
 * _.difference(array, [values]) : Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order of result values is determined by the order they occur in the first array.
 *
 */

import {expect} from 'chai';

describe('difference', () => {

    it('inline can be done with reduce', () => {

        // _.difference([2, 1], [2, 3]);
        // ➜ [1]

        const filter = [2, 3];
        const result = [2, 1].reduce((acc, next) => filter.includes(next) ? acc : acc.push(next) && acc, []);

        expect(result).to.deep.equal([1]);
    });

    it('general can be done with reduce and gather (for variadic)', () => {

        function difference (arr, ...filters) {
            const filter = filters.reduce((acc, next) => acc.concat(next));
            return arr.reduce((acc, next) => filter.includes(next) ? acc : acc.push(next) && acc, []);
        }

        const result = difference([2, 1, 3], [2], [3]);

        expect(result).to.deep.equal([1]);
    });

});



