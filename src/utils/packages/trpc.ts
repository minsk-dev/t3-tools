import { getPackageVersion, isPackageInstalled, Package } from './index.js';
import { findPackageJson } from '../npm.js';

export class TRPC implements Package {
	name = 'TRPC';
	value = '@trpc/client';
	devDependency = false;

	version = async (): Promise<string | undefined> => {
		return getPackageVersion(await findPackageJson(), this);
	};

	isInstalled = async (): Promise<boolean> => {
		return isPackageInstalled(await findPackageJson(), this);
	};
}
