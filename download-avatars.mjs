import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { url: 'https://i.pravatar.cc/100?img=1', file: 'public/img/avatar-1.jpg' },
  { url: 'https://i.pravatar.cc/100?img=2', file: 'public/img/avatar-2.jpg' },
  { url: 'https://i.pravatar.cc/100?img=3', file: 'public/img/avatar-3.jpg' }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function run() {
  for (const img of images) {
    const p = path.join(process.cwd(), img.file);
    console.log('Downloading', img.url);
    await downloadImage(img.url, p);
    console.log('Saved', p);
  }
}
run();
