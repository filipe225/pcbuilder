import pug from 'pug';
import path from 'path';
import { promises as fs } from 'fs';


async function readFiles(dir_name: string) {
    const basePath = path.join(__dirname, dir_name);
    const files = await fs.readdir(basePath);
    for (let f of files) {
        const fileData = await fs.readFile(path.join(basePath, f));
        html += converter.makeHtml(fileData);
    }
}
