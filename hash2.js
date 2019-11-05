//Hash tables implementation (linear probing)

//Linear probing 


class HashTable {
  constructor(size = 4) {
    this.table = new Array(size),
    this.values= []
  }

  hash(key) {
    let primeNum = 37
    let num = 0;
    for (let i = 0; i < key.length; i += 1) {
      num += primeNum + key.charCodeAt(i);
    }
    num = num % this.table.length;
    return parseInt(num)
  }

  insert(key,value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = key;
      this.values[index] = value
    } else {
      while (this.table[index]) {
          index++
      } 
      this.table[index] = key;
      this.values[index] = value
   }
    
  }

  get(key) {
    let index = this.hash(key)
    if(this.table[index]) {
        for(let i = 0; i < this.table[index].length; i++){
            if(this.table[index] === key){
                
                 return this.values[index]
            }
        }
    } 
    return undefined;
  }
 

  values() {
    return this.values
  }

  keys() {
    return this.table
  }
}

let h = new HashTable();
h.insert("first", "apple")
h.insert("second", "pineapple")
h.insert("third", "mango")
h.insert("fourth", "banana")
// console.log(h.get("third"));
console.log(h)
console.log(h.keys())
console.log(h.values);

