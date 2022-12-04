import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = await createWriteStream(fileName, { flags: 'a' });
  //   stdin.on('data', (data) => {
  //     writableStream.write(data);
  //     exit(1);
  //   });
  stdin.pipe(writableStream);
};

await write();
