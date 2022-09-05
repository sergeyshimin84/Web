import {Howl, Howler} from 'howler';
import { printError, printResult } from './printResult.js';
import { getDate } from './getDate';
import { form } from './switch.js';

timer.onclick = form('timer');

let counter = 0;
const intervalId = setInterval(() => {
    console.log(`${counter}`);
    counter += 1;
  if (counter === 5) {
      console.log('Done');
      clearInterval(intervalId);
    }
}, 1000);

