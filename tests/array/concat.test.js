/*
 * _.concat(array, [values]) : Creates a new array concatenating array with any additional arrays and/or values
 *
 */

import {expect} from 'chai';

describe('concat', () => {

    it('inline can be done with [].concat', () => {

        // var array = [1];
        // var other = _.concat(array, 2, [3], [[4]]);
        //
        // console.log(other);
        // ➜ [1, 2, 3, [4]]
        //
        // console.log(array);
        // ➜ [1]

        const array = [1];
        const result = [].concat(array, 2, [3], [[4]]);

        expect(result).to.deep.equal([1, 2, 3, [4]]);
    });

});


