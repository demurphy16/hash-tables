class HashTable {
  constructor(size = 11) {
    // initialize table size - prime number size is recommended to avoid clustering
    // intialize the table to have "size" number of elements, set to null
    // the table will be an array named "table"
    this.table = new Array(size)
  }

  hash(key) {
    // calculate and return an integer value based key, like in the lesson
    // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
    let num = 7
    for (let i = 0; i < key.length; i += 1) {
      num += key.charCodeAt(i)
    }
    let index = num % this.table.length
    return index
  }

  insert(key, value) {
    // hash the key to get an integer index
    let index = this.hash(key)
    // if there's no array at that index in the table 
    // create one and add it
    // and insert this key value pair into the new array
    if (!this.table[index]) {
      this.table[index] = []
    }
    // if there's a array at that index
    // if a key value pair already exists with the same key, update the data in that key value pair to store the new value
    this.table[index].push([key, value])
    // otherwise
    // add a new key value pair with the given value to the end of the array

    // for the convenience of the user, you might wish to return the key value pair, or you can just return true
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    // if the key is, in fact, in the array, delete that key value pair and return it
    // if the key wasn't found return null
    let index = this.hash(key)

    if (!this.table[index]) {
      return null
    }

    for (let i = 0; i < this.table[index].length; i += 1) {
      if (this.table[index][i][0] === key) {
        return this.table[index].splice(i, i + 1)
      }
    }
  }

  search(key) {
    // hash key to get index
    // search the array at the index
    // if the key is found, return the value
    // if not, return null
    let index = this.hash(key)

    if (!this.table[index]) {
      return null
    }

    for (let i = 0; i < this.table[index].length; i += 1) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1]
      }
    }
  }

}

let testTable = new HashTable()
/// or you can pass in a size remember to use prime numbers
/// let testTable = new HashTable(17)

console.log("this is the hash table", testTable.table)

testTable.insert('firstName', 'Shay')

console.log("finding firstName key", testTable.search('firstName'))

console.log("hash table after adding firstName key", testTable.table)

testTable.delete('firstName')

console.log("hash table after deleting firstName key", testTable.table)