import * as fs from 'fs';

export const getAuthors = (): string[] => {
  let array: string[] = [];

  array = fs.readFileSync(process.argv[2]).toString().split('\n');
  if (array[array.length - 1] === '') {
    array.pop();
  } else {
    throw 'Error author file';
  }
  return array;
};
