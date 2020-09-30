import * as fs from 'fs';
import {makeHeader} from '../Header';

const file: string = fs.readFileSync(process.argv[2]).toString();
const newHeader: string = makeHeader(process.argv[2]);
// const newHeader: string = makeHeader(fileName);

fs.writeFile(process.argv[2], newHeader + file, () => {});
