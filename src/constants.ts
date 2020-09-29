import * as fs from 'fs';
import {Author} from './Author';

function authors() {
  let array: string[] = [];
  let data: string;

  array = fs.readFileSync(process.argv[2]).toString().split('\n');
  console.log(array);
  return array;
}
console.log(authors());