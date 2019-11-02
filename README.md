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















































# Hash Tables Exercise

Complete the methods and classes defined in `HashTable.js` according to the specifications in the comments.

> **Note:** The second myGA module, Hash Tables Deep Dive, links out to CodePen for a code challenge for a hash table.

It's recommended that you complete **both** myGA modules on hash tables before attempting the exercise in order to give you all the tools you need to implement the table.
