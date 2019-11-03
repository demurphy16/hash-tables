// // Hashing a string

// hash("pink")

// // You pass the index you want to check and the string.
// "a".charCodeAt(0)
// // 97
// "hi".charCodeAt(0)
// //104
// "hi".charCodeAt(1)
// // 105

// // If you subtract 96 it will give us the alphabetic ranking
// "a".charCodeAt(0) - 96
// // 1
// "d".charCodeAt(0) - 96
// // 4
// "z".charCodeAt(0) - 96
// // 26

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2 "c" to 3, ect.
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// Refactoring our hash
// function hash(key, arrayLen) {
//   let total = 0;
//   let weird_prime = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96
//     total = (total * werid_prime + value) % arrayLen;
//   }
//   return total;
// }

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * werid_prime + value) % arrayLen;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    return index;
  }
  get(key) {}
}

let ht = new HashTable();
