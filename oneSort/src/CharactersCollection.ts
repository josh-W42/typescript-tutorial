export class CharactersCollection {
  // changed the solution a bit so that we could
  // keep swap and compare constant
  // the only issue is when this class gets the
  // value of data
  private charArray: string[];

  constructor(private _data: string) {
    this.charArray = _data.split("");
  }

  get data(): string {
    return this.charArray.join("");
  }

  get length(): number {
    return this._data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.charArray[leftIndex].toLowerCase() >
      this.charArray[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.charArray[leftIndex] = this.charArray[rightIndex];
    this.charArray[rightIndex] = leftHand;
  }
}
