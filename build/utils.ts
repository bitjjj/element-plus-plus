import path from 'path';
import { dependencies, peerDependencies, devDependencies } from '../package.json';

export const pkgName = 'element-plus-plus';

export const prjRootDir = path.resolve(__dirname, '../');
export const srcRootDir = path.resolve(prjRootDir, 'src');
export const componentsRootDir = path.resolve(prjRootDir, 'src', 'components');

export const distRootDir = path.resolve(prjRootDir, 'dist');
export const typesOutDir = path.resolve(prjRootDir, 'types');

export const getPackageDependencies = (): Record<'dependencies' | 'peerDependencies' | 'devDependencies', string[]> => {
  return {
    dependencies: Object.keys(dependencies || {}),
    devDependencies: Object.keys(devDependencies || {}),
    peerDependencies: Object.keys(peerDependencies || {}),
  };
};

export const getAllDependencies = (): string[] => {
  const { dependencies, peerDependencies, devDependencies } = getPackageDependencies();
  return [...new Set([...dependencies, ...peerDependencies, ...devDependencies, 'vue'])];
};
