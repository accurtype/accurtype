/**
 * 文档数据提取脚本
 * @license MIT
 */

import * as path from 'path';
import * as fsp from 'fs/promises';
import { ExtractorConfig, Extractor } from '@microsoft/api-extractor';
import * as notPacks from './not-packs.json';

interface Pack {
	name: string;
	path: string;
	libPath: string;
}
class Gen {
	packDir = path.join(__dirname, '..');
	packs: Pack[] = [];
	async getPacks() {
		const dirRead = await fsp.readdir(this.packDir);
		this.packs = dirRead
			.filter(n => !notPacks.includes(n))
			.map(name => ({
				name,
				path: path.join(this.packDir, name),
				libPath: path.join(this.packDir, name, 'lib'),
			}));
	}

	entryFile = __dirname + '/export.d.ts';
	async link() {
		for (const pack of this.packs) {
			await fsp.symlink(pack.libPath, path.join(__dirname, pack.name));
		}
		await fsp.writeFile(
			this.entryFile,
			this.packs.map(({ name }) => `export * from './${name}';`),
		);
	}

	extractConfig = __dirname + '/api-extractor.json';
	extracted = __dirname + '/export.api.json';
	async extract() {
		const extractorConfig = ExtractorConfig.loadFileAndPrepare(this.extractConfig);
		const extractorResult = Extractor.invoke(extractorConfig);
		if (!extractorResult.succeeded) throw Error('Extract failed', { cause: extractorResult });
	}

	async clear() {
		for (const { name } of this.packs) {
			await fsp.unlink(path.join(__dirname, name));
		}
		await fsp.unlink(this.entryFile);
		await fsp.unlink(this.extracted);
	}

	async run() {
		await this.getPacks();
		try {
			await this.link();
			await this.extract();
		} finally {
			await this.clear();
		}
	}
}

new Gen().run();
