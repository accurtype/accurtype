/* eslint-env node */
import Releaser from '../lib/index.js';
import { dir } from './helper.js';

console.log(dir);

const releaser = new Releaser(dir);
releaser.addTag();
