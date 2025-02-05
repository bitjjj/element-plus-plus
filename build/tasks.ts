import { parallel, series } from 'gulp';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import glob from 'fast-glob';
import { copy } from 'fs-extra';
import { prjRootDir, pkgName, distRootDir, typesOutDir } from './utils.ts';
import type { TaskFunction } from 'gulp';

export const copyTypesDefinitions: TaskFunction = async (done) => {
  const typesDir = path.join(typesOutDir, 'src');
  const srcFilePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  });
  const rewriteTasks = srcFilePaths.map(async (filePath) => {
    const content = await readFile(filePath, 'utf8');
    const result = content.replaceAll('@/utils', `${pkgName}/es/utils`);
    await writeFile(filePath, result, 'utf8');
  });
  await Promise.all(rewriteTasks);

  const copyTypes = async (libModule: string) => {
    const componentsSrc = path.resolve(typesDir, 'components');
    await copy(componentsSrc, path.join(distRootDir, libModule, 'components'), { recursive: true });

    const utilsSrc = path.resolve(typesDir, 'utils');
    await copy(utilsSrc, path.join(distRootDir, libModule, 'utils'), { recursive: true });

    await copy(path.resolve(typesDir, 'index.d.ts'), path.join(distRootDir, libModule, 'index.d.ts'));
  };

  await copyTypes('es');
  await copyTypes('lib');

  done();
};

export const copyFiles: TaskFunction = (done) => {
  ['package.json', 'global.d.ts', 'README.zh.md', 'README.md'].forEach(async (fileName) => {
    await copy(path.resolve(prjRootDir, fileName), path.join(distRootDir, fileName));
  });
  done();
};

export default series(parallel(copyTypesDefinitions, copyFiles));
