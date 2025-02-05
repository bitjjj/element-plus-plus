import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import glob from 'fast-glob';
import { copy } from 'fs-extra';
import { prjRootDir, typesOutDir } from './utils.ts';

export const generateTypesDefinitions = async () => {
  const typesDir = path.join(typesOutDir, 'packages');
  const srcFilePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  });
  // const dirPaths = await glob([`./*`, '!common'], {
  //   cwd: typesDir,
  //   absolute: true,
  //   onlyDirectories: true,
  // });
  // const dirPathsModule = dirPaths.map((p) => [p, p.substring(p.lastIndexOf('/') + 1)]);

  const rewriteTasks = srcFilePaths.map(async (filePath) => {
    const content = await readFile(filePath, 'utf8');
    const module = dirPathsModule.find((a) => filePath.startsWith(a[0]))![1];
    await writeFile(filePath, pathRewriter(content, module), 'utf8');
  });
  await Promise.all(rewriteTasks);

  // const copyTypes = (libModule: string) => {
  //   dirPathsModule.forEach(async (p) => {
  //     const moduleName = p[1];
  //     const src = path.resolve(typesDir, moduleName);
  //     await copy(src, path.join(distDir, moduleName, libModule), { recursive: true });

  //     const common = path.resolve(typesDir, 'common');
  //     await copy(common, path.join(distDir, moduleName, libModule, 'common'), { recursive: true });
  //   });
  // };

  // copyTypes('es');
  // copyTypes('lib');
};

(async () => {
  await generateTypesDefinitions();
})();
