import { read } from 'fs';
import {ReadLine, createInterface} from 'readline';

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  readLine
    .on('line', line => {
      if (line) {
        console.log(`Line: '${line}'`);
      } else {
        readLine.emit('end');
      }
    })
    .on('end', () => {
      console.log('Done.');
      readLine.close();
    });
}

askQuestion();

console.log('Enter path to author file');
