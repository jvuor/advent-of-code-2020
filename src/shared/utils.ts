import * as fs from 'fs';
import * as path from 'path';

function resolvePath(parentPath: string | null, argPath: string | undefined): string {
  const testPath = (p: string): boolean => fs.existsSync(p);

  if (argPath) {
    if (testPath(argPath)) {
      return argPath;
    }

    if (parentPath && testPath(path.join(parentPath, argPath))) {
      return path.join(parentPath, argPath);
    }

    throw new Error(`Cannot find file ${argPath}`);
  }

  if (parentPath && testPath(path.join(parentPath, 'input.txt'))) {
    return path.join(parentPath, 'input.txt');
  }

  throw new Error('Cannot find input file');
}

export function getInput(argPath?: string): string {
  const moduleParents = Object.values(require.cache)
    .filter((m) => m.children.includes(module));
  if (!argPath && moduleParents.length !== 1) {
    throw new Error('Cannot resolve parent module, please provide path to file');
  }

  const parentPath = moduleParents.length === 1 ? moduleParents[0].path : null;
  const filePath = resolvePath(parentPath, argPath);
  const input = fs.readFileSync(filePath, { encoding: 'utf8' });
  return input;
}
