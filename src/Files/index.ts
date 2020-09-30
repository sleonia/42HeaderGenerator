import * as fs from 'fs';

export const getFiles = (dir: string, files_: string[] = []): string[] => {
  try {
    if (fs.statSync(dir).isDirectory() === false) {
      files_.push(dir);
    } else {
      const files = fs.readdirSync(dir);
      for (const file in files) {
        const name = `${dir}/${files[file]}`;
        if (fs.statSync(name).isDirectory()) {
          getFiles(name, files_);
        } else {
          files_.push(name);
        }
      }
    }
  } catch (error) {
    console.error(`Error path to file/folder: ${dir}`);
  }
  return files_;
};
