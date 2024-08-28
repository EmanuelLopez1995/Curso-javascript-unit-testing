import { it, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('Transform to number',()=>{
    it('should change the type of number if you send a number in string', ()=>{
        var number = '1';

        var result = transformToNumber(number);

        var resultNumber = +number;
        expect(result).toBe(resultNumber);
        //tambien se podria preguntar por el tipo de variable 
        expect(result).toBeTypeOf('number');
    });
    it('should be NaN if you send a string with text', ()=>{
        var send = 'hello';

        var result = transformToNumber(send);

        expect(result).toBeNaN();
    })
    it('should yield NaN if you send an array', ()=>{
        var array= ['1','2'];

        const resultFn = transformToNumber(array);

        expect(resultFn).toBeNaN();
    })
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', ()=>{
        const numberValues = ['1', '2'];

        const cleanedNumebrs = cleanNumbers(numberValues);

        expect(cleanedNumebrs[0]).toBeTypeOf('number');
        expect(cleanedNumebrs).toEqual([1, 2]);
    });
    it('should trhrow an error if an array with at least one empty string is provided', ()=>{
        const numberValues = ['', 1];

        const cleanFn = ()=>{
            cleanNumbers(numberValues);
        }

        expect(cleanFn).toThrow();
    })

})