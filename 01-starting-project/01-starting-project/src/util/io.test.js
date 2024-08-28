import {it, expect, vi} from 'vitest';
import writeData from './io';
import  {promises as fs} from 'fs';

vi.mock('fs'); //encuentra todas las funciones del modulo fs, y las reemplaza con funciones spy vacias   
vi.mock('path', () =>{ // se agrega un segundo parametro como funcion, para seleccionar solo el metodo join 
    return {
        default:{
            join: (...args)=>{
                return args[args.length - 1]
            }
        }
    }
});

it('should execute the writeFile method', ()=>{
    const testData = 'test';
    const testFileName = 'test.txt';
    writeData(testData, testFileName);

    expect(fs.writeFile).toBeCalledWith(testFileName,testData);
})