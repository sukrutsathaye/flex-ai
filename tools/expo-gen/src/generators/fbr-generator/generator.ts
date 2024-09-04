import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { FbrGeneratorSchema } from './schema';

export async function fbrGenerator(
  tree: Tree,
  options: FbrGeneratorSchema
) {
  const projectRoot = `apps/${options.name}`;
  const appDir = `${projectRoot}/src/app`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default fbrGenerator;
