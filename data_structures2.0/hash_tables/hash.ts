class HashTable {
  size: number;

  data: string[];

  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: string | number) {
    const hashed = this._hash(key);
    this.data[value] = hashed;
    return this.data;
  }

  get(key: string | number) {
    return this.data[key];
  }
}

const ht = new HashTable(50);
ht.set('apa', 2);
console.log(ht);
console.log(ht.get(2));
// console.log(ht._hash('apa'));
