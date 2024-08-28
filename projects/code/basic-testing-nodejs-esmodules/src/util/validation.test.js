import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';


describe('testing validateStringNotEmpty', ()=>{
    it('should show an error if you send an empty value', ()=>{
        const value = '';

        const resultFn = ()=>{
            validateStringNotEmpty(value);
        };

        expect(resultFn).toThrow();
    })
})
describe('testing validateStringNotEmpty', ()=>{
    it('should throw an error if is not a number', ()=>{
        const value = 'invalid';

        const resultFn = ()=>{
            validateNumber(value);
        };

        expect(resultFn).toThrow();
    })
})
