import * as fs from 'fs';
import { generateHeader } from '../Header';
import { getFiles } from '../Files';

export class App {
  public run(): void {
    const files: string[] = getFiles(process.argv[3]);

    for (const file in files) {
      const newHeader: string = generateHeader(files[file]);
      const fileData: string = fs.readFileSync(files[file]).toString();
      fs.writeFile(files[file], newHeader + fileData, () => {});
    }
  }
}
