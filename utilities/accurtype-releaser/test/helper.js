/* eslint-env node */
import * as path from 'path';
import { getDirname } from 'esm-entry';

export const dir = path.join(getDirname(import.meta.url), '../../..');
