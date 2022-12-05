import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { exit } from 'node:process';
import { pipeline } from 'node:stream';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToCompress.txt');
const archivePath = getFilePath(import.meta.url, 'files', 'archive.gz');

const gzip = createGzip();
const source = createReadStream(filePath);
const destination = createWriteStream(archivePath);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
      exit(1);
    }
  });
};

await compress();
