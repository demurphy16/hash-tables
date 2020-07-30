class HashTable {
  constructor(size = 3) {
    this.table = new Array(size)
    this.entries = 0
  }

  hash(key, tableSize) {
    let num = 7

    for (let i = 0; i < key.length; i += 1) {
      num += key.charCodeAt(i)
    }

    let index = num % tableSize

    return index
  }

  resize() {
    let newTable = new Array(this.table.length * 3)

    this.table.forEach(bucket => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          let index = this.hash(key, newTable.length)
          if (newTable[index]) {
            newTable[index].push([key, value])
          } else {
            newTable[index] = [[key, value]]
          }
        })
      }
    })
    this.table = newTable
  }

  insert(key, value) {
    this.entries += 1

    let loadFactor = this.entries / this.table.length

    if (loadFactor > 0.8) {
      this.resize()
    } else {
      let index = this.hash(key)
      if (!this.table[index]) {
        this.table[index] = []
      }
      this.table[index].push([key, value])
    }
  }

  delete(key) {
    let index = this.hash(key)

    if (!this.table[index]) {
      return null
    }

    this.entries -= 1

    for (let i = 0; i < this.table[index].length; i += 1) {
      if (this.table[index][i][0] === key) {
        return this.table[index].splice(i, i + 1)
      }
    }
  }

  search(key) {
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
console.log(testTable.table.length)

testTable.insert('firstName', 'Shay')
console.log(testTable.table.length)

testTable.insert('lastName', 'Kelley')
console.log(testTable.table.length)

/// this is where you see the resizing happen
testTable.insert('age', '29')
console.log(testTable.table.length)

testTable.insert('phone', '123-456-7890')
console.log(testTable.table.length)