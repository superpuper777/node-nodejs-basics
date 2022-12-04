import { env } from 'node:process';

const prefix = 'RSS_';
const arr = [];
const parseEnv = () => {
  for (let key in env) {
    if (key.startsWith(prefix)) {
      arr.push(`${key}=${env[key]}`);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();
