export class Attributes<T> {
  constructor(private data: T) {}

  // this syntax make the type K as a type of the key of T
  // that's confusing haha but essentially
  // if T was
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    // all properties on update are added to the data object
    Object.assign(this.data, update);
  }
}
