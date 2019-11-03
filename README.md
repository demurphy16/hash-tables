![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Hash tables(hash maps)

###
1. Define what a hash table is 
2. Define what a hashing algorithm
3. Collisions and strategies for handling them.

Built-in in almost every programming language. 

`{}`

A hash table is used to store **key-value** pairs. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

Because of their speed and time complexity, hash tables are very common.

Colors concept/ grocery store examples.

To implement a hash table, we will be using an array. 

In order to look up values by key, we need a way to convert keys into valied array indices. A function that performs this task is called a **hash function**.

Hashing functions(conceptually):
  
* passing the same string and always return the **same** output, always.
* two strings should not produce the same value. 

A good function is supposed to be:
1. Doesn't cluster outputs at specific indices
2. Fast 
3. Deterministic(same input yields the same output)

Example of what we don't want!
```
function slowHash(key) {
  for (let i = 0; i < 1000; i++) {
    console.log('my slow hash');
  }
  return key[0].charCodeAt(0);
}
```

## Dealing with Collision
- Even with a large array and a great hash function, collisions are inevitable
- There are many strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining 
2. Linear Probing 


## Set/ Get
1. Accepts a key and a value 
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining
















































# Hash Tables Exercise

Complete the methods and classes defined in `HashTable.js` according to the specifications in the comments.

> **Note:** The second myGA module, Hash Tables Deep Dive, links out to CodePen for a code challenge for a hash table.

It's recommended that you complete **both** myGA modules on hash tables before attempting the exercise in order to give you all the tools you need to implement the table.
