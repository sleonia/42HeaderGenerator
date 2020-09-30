import * as fs from 'fs';
import { generateHeader } from '../Header';
import { getFiles } from './getFiles';


const files: string[] = getFiles(process.argv[2]);
for (let file in files) {
	const newHeader: string = generateHeader(files[file]);
	const fileData: string = fs.readFileSync(files[file]).toString();
	// console.log(fileData);
	fs.writeFile(files[file], newHeader + fileData, () => {});
	// console.log(newHeader);
}
// const file: string = fs.readFileSync(process.argv[2]).toString();


// const testFolder = '/Users/a18573961/Desktop/code/my/42HeaderGenerator/src';
// const testFolder: string = '/Users/a18573961/Desktop/code/my/42HeaderGenerator/src/index.ts';

// console.log(getFiles(process.argv[2]))
