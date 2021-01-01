import { BinaryTree } from './BST';

function rightmost(btree: BinaryTree): number {
  if (btree.right !== null) {
    return rightmost(btree.right)
  } else {
    return btree.node ? btree.node : 0;
  }
}

function transformPassToNumber (pass: string): number {
  const passAsBinary = pass
    .replace(/B/g, '1')
    .replace(/R/g, '1')
    .replace(/\D/g, '0');

    return parseInt(passAsBinary, 2);
}

export { rightmost, transformPassToNumber };
