import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Use ES module syntax for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/donate', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/job', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs as needed
];

const sitemap = new SitemapStream({ hostname: 'https://www.codespaces.org' });

const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));
sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => console.log('Sitemap generated!'));
