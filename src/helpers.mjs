import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const getFilePath = (meta, ...args) => {
  const __filename = fileURLToPath(meta);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, ...args);
  return filePath;
};
