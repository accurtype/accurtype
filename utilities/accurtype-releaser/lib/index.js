/**
 * @package 精确类型自动构建脚本
 * @license MIT
 */
/* eslint-env node */

import { simpleGit } from 'simple-git';
import { getPackages } from '@manypkg/get-packages';
import { readFile } from 'fs/promises';

export default class Releaser {
	/**
	 * @param {string} dir Git 存储库的地址
	 */
	constructor(dir) {
		this.dir = dir;
		this.git = simpleGit(dir);
		this.packages = getPackages(dir);
	}
	/**
	 * 获得上次提交的包描述
	 * @param {string} dir 包地址
	 * @returns {Promise<import('@manypkg/get-packages').Package['packageJson']>}
	 * @protected
	 */
	async checkoutPackageJson(dir) {
		await this.git.checkout('HEAD^', ['--', `${dir}/package.json`]);
		const json = JSON.parse(`${await readFile(`${dir}/package.json`)}`);
		await this.git.checkout('HEAD', ['--', `${dir}/package.json`]);
		return json;
	}
	/**
	 * 获得版本有变更的包
	 */
	async getVersionedPackages() {
		/**@type {Set<import('@manypkg/get-packages').Package>} */
		const packages = new Set();
		for (const packageInfo of (await this.packages).packages) {
			const { packageJson: { version: versionNow }, dir } = packageInfo;
			if (packageInfo.packageJson.private ?? false) continue;
			const { version: versionLast } = await this.checkoutPackageJson(dir);
			if (versionLast !== versionNow) packages.add(packageInfo);
		}
		return packages;
	}
	async addTag() {
		console.log(await this.packages);
	}
}
