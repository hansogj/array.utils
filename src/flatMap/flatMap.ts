
// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Array<T> {
  flatMap<U, This = undefined> (
    callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]
}

Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function (lambda) {
    return Array.prototype.concat.apply([], this.map(lambda));
  };
