import { extractEnteredNumberValues } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add, calculateResult } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { generateResultText, outputRsult } from './src/output.js';

const form = document.querySelector('form');


function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  let result = calculateResult(numberValues);
  const resultText = generateResultText(result);

  outputRsult(resultText)

}

form.addEventListener('submit', formSubmitHandler);
