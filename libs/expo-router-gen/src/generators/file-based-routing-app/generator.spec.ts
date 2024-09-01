import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { fileBasedRoutingAppGenerator } from './generator';
import { FileBasedRoutingAppGeneratorSchema } from './schema';

describe('file-based-routing-app generator', () => {
  let tree: Tree;
  const options: FileBasedRoutingAppGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await fileBasedRoutingAppGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
