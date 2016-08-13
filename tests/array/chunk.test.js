/*
 * _.chunk(Array, Size) : Creates an array of elements split into groups the length of size. If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 */

import {expect} from 'chai';

describe('chunk', () => {

    it('inline can be done with reduce', () => {

        // _.chunk(['a', 'b', 'c', 'd'], 2);
        // ➜ [['a', 'b'], ['c', 'd']]

        const result = ['a', 'b', 'c', 'd'].reduce((acc, next, i) => {
            const ix = Math.floor(i/2);
            acc[ix] = [...(acc[ix] || []), next];
            return acc;
        },[]);

        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });


    it('general chunk with reduce', () => {

        // _.chunk(['a', 'b', 'c', 'd'], 3);
        // ➜ [['a', 'b', 'c'], ['d']]

        function chunk(arr, size) {
            return arr.reduce((acc, next, i) => {
                const ix = Math.floor(i/size);
                return (acc[ix] = [...(acc[ix] || []), next]) && acc;
            },[]);
        }

        const result = chunk(['a', 'b', 'c', 'd'], 3);

        expect(result).to.deep.equal([['a', 'b', 'c'], ['d']])
    });

});
