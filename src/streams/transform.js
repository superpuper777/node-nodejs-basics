import { stdin, stdout } from 'node:process';
import { Transform, pipeline } from 'node:stream';

const transformable = new Transform({
  transform(chunk, enc, cb) {
    const str = chunk.toString().trim();
    const reverse = str.split('').reverse().join('');
    cb(null, reverse + '\n');
  },
});

const transform = async () => {
  pipeline(stdin, transformable, stdout, (err) => {
    console.log(err);
  });
};

await transform();
