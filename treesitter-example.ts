const hello = 'test';
const longStr = `helo`;

type Node<T> = { value: T; next: Node<T> } | null;

function append<T>(node: Node<T>, value: T): Node<T> {
  return { value, next: node };
}

function crazy(foo: { id: string }) {
  const id = foo.id;
  return {
    name: 'Fred',
    id,
    values: [
      { id: 'birthday', value: '1990-08-08' },
      { id: 'address', value: 'Boston' },
    ],
  };
}
