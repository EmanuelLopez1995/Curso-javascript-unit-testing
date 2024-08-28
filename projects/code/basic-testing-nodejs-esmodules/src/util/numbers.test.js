import { it, expect, describe } from 'vitest';
import { transformToNumber } from './numbers';

describe('Testing numbers file',()=>{
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
})