import { it, expect, beforeAll, beforeEach, afterEach, afterAll  } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() =>{  //Se ejecuta antes de todos los test
  user = new User(testEmail);
  console.log('beforeAll');
})

beforeEach(()=>{ //se ejecuta antes de cada test
  console.log('beforeEach');
})

afterEach(()=>{ //se ejecuta despues de cada test
  user = new User(testEmail);
  console.log('afterEach');
})

afterAll(()=>{ // se ejecuta despues de todos los test
  console.log('afterAll');
})




it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {

  const user = new User(testEmail);
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
