import * as fs from 'fs';

export const getAuthors = (authorFile: string = ''): string[] => {
  let array: string[] = [];

  if (authorFile === '' || fs.statSync(authorFile).isFile() === false) throw 'Error arguments';

  array = fs.readFileSync(authorFile).toString().split('\n');
  if (array[array.length - 1] === '') {
    array.pop();
  } else {
    throw 'Error author file';
  }
  return array;
};
