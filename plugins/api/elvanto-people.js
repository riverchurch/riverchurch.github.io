import fs from 'fs';
import path from 'path';

export default function() {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(
        path.join(process.cwd(), 'cached-addresses.json'),
        'utf8'
      );
      return resolve(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
};
