![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Hash tables(hash maps)

###
1. Define what a hash table is 
2. Define what a hashing algorithm
3. Collisions and strategies for handling them.

Built-in in almost every programming language. 

`{}`

```javascript
let object = {} 
object['one'] = 1;
object['two'] = 2;
object['three'] = 3;


// show the values stored

function showValue(key) {
    if (typeof key === 'string') {
      if (object.hasOwnProperty(key)) {
        return `key is: ${key}, value is: ${object[key]}`;
      } else {
        return `It doesn't exist`
      }
    } 
    return `a key can only be a string`
    
}

showValue('onetwo') // => it doesn't exist
showValue('one') // => key is: one, value is: 1
showValue(1) // => a key can only be a string
```
[Map Object JS MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

---

A hash table is used to store **key-value** pairs. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
Because of their speed and time complexity, **hash tables** are very common.

In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a **hash function**.

* **Example**: Suppose you work at a grocery store, and you want to look up the price of the different products. Imagine they are not alphabetizied, which means that if you were to find the product, you are looking for it will take you O(n) time. Let's say, products were in alphabetic order and applying binary search will take O(logn) time. What if there was an algorithm or a program where you can just feed the name of the product and return you the price instantly, O(1) time? Wouldn't it be really efficient and time-saving? The answer is yes, this is where hash functions come in.

**Hashing functions(conceptually):**

* in technical terms, we say that a hash function "maps string to numbers".
* passing the same string and always return the **same** output, always.
* two strings should not produce the same value. 

### A good function:
1. Fast 
2. Doesn't cluster outputs at specific indices, it should map different strings to different numbers
3. Deterministic(**same input yields the same output**) or consistent.

Hashing is a common technique 

## Set/ Get
1. Accepts a key and a value 
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining


## Big O of Hash tables
Fantastic time complexity! However, this does depend on how good your hash function is.. How fast is it and how evenly does it distribute things, which would minimize the number of collisions. This is why it is often best to use built in hash function instead of writing your own. 

![Big O](https://media.git.generalassemb.ly/user/19642/files/56eef480-fe6a-11e9-959f-2d1fbe1f2f83)



## Cryptographic hashing

![crypto-hash](https://media.git.generalassemb.ly/user/19642/files/6f5f0f00-fe6a-11e9-84a4-5d42c0c73a75)

Blockchain technology use a special branch of hashing that involved cryptography. If you are interested in the area you can pretty easily implement some of these complicated algorithms into your applications with these packages.

https://www.npmjs.com/package/md5


https://www.npmjs.com/package/js-sha256

These are just two popular examples of hashing algorithms.

## Auth 
Another place we see hashing is with Authentication.
We are going to talk about this process in more detail this week. One approach to Auth is to use json web tokens (JWT) to hash you data. You can get familiar with the concept here if you're interested.
https://blog.angular-university.io/angular-jwt/










































# Hash Tables Exercise

Complete the methods and classes defined in `HashTable.js` according to the specifications in the comments.

> **Note:** The second myGA module, Hash Tables Deep Dive, links out to CodePen for a code challenge for a hash table.

It's recommended that you complete **both** myGA modules on hash tables before attempting the exercise in order to give you all the tools you need to implement the table.
