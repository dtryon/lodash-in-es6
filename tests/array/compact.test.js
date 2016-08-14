/*
 * _.compact(Array) : Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 */

import {expect} from 'chai';

describe('compact', () => {

    it('inline can be done with filter', () => {

        // _.compact([0, 1, false, 2, '', 3]);
        // ➜ [1, 2, 3]

        const result = [0, 1, false, 2, '', 3].filter(n => !!n);

        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('general compact with filter', () => {

        function compact(arr) {
            return arr.filter(n => !!n);
        }

        const result = compact([0, 1, false, 2, '', 3]);

        expect(result).to.deep.equal([1, 2, 3]);
    });

});

