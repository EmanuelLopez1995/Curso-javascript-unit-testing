import {it, expect} from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done)=>{
    const testUserEmail = 'test@gmail.com';
    generateToken(testUserEmail, (err, token)=>{
        try{
            expect(token).toBeDefined();
            done();
        }catch (err){
            done(err);
        }
    });
})

//con las promises se puede hacer asi:
it('should generate a token value', ()=>{
    const testUserEmail = 'test@gmail.com';

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})

//o con async await
it('should generate a token value', async ()=>{
    const testUserEmail = 'test@gmail.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
})

