class BinaryTree {
  public node: number | null;
  public left: BinaryTree | null;
  public right: BinaryTree | null;

  public constructor(value?: number) {
    this.node = (value !== undefined) ? value : null;
    this.left = null;
    this.right = null;
  }

  public insert(value: number) {
    if (this.node === null) {
      this.node = value;
    } else if (value < this.node) {
      if (this.left === null) {
        this.left = new BinaryTree(value)
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

function* inOrder(tree: BinaryTree): Generator<number> {
  if (tree.left) {
    yield* inOrder(tree.left);
  }
  if (tree.node !== null) {
    yield tree.node;
  }
  if (tree.right) {
    yield* inOrder(tree.right);
  }
}

function insertArray(array: number[]): BinaryTree {
  const tree = new BinaryTree();
  for (const value of array) {
    tree.insert(value);
  }
  return tree;
}

export { BinaryTree, inOrder, insertArray }