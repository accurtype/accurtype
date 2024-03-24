/* eslint-env node */
import Releaser from '../lib/index.js';
import { dir } from './helper.js';

const releaser = new Releaser(dir);
releaser.getVersionedPackages();
