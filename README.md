# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

![](https://media.giphy.com/media/U1rlk8zdcAwbm/giphy.gif)

## Data Structures Cont'd: Hash Tables, AKA Hash Maps

### Lesson Objectives

1. Define a hash table 
1. Define a hashing algorithm
1. Understand collisions and strategies for accounting for them

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


### Introducing Hash Tables

What *are* hash tables?

<details><summary>Reveal Answer</summary>
    
<br>

- An unordered, associative array abstract data type which maps **keys** to **values** for efficient lookup.
- Utilizes a **hash function** to generate an **index**, or hash code, with an associated bucket, or value.

</details>

<br>

Why are hash tables useful?

<details><summary>Reveal Answer</summary>
    
<br>
    
- Hash tables are incredibly efficient and are built-in with almost every programming language.
- They are "possibly the **most useful data structure for interviews**– in fact, one technique I often tell people is that, for any problem in an interview, have a hash table at the top of your mind for a solution." (Gayle Laakmann McDowell, Author of Cracking the Coding Interview)

</details>

<br>

### Hashes

Unlike arrays, hash tables are extremely efficient for finding values, adding new values, and removing values. To store a piece of data in a hash table, a key is mapped to a number in a range of 0 through the hash table size, using the hash function.

<br>

### Hash Functions

In order to look up values by the hash key, we need a way to convert the keys into valid array indices. The function that performs this task is called a **hash function**.

A hash function takes a string as an input, and converts it to an integer, then remaps that integer into the array.

- Suppose you work at a grocery store, and you want to look up the price of the different products. Imagine they are not alphabetized, which means that, if you were to find the product, it will take you O(n) runtime. Now imagine products were in alphabetical order; applying the binary search will take O(log n) runtime. 

What if there was an algorithm or a program where you can just feed the name of the product and return you the price instantly, O(1) time? Wouldn't it be really efficient and time-saving? 

Yes– this is where hash functions are helpful.

We map from the key, to the hash code, then to the index.

#### Conceptually...

In technical terms, we say that a hash function "maps strings to numbers." Two problems: 

1. There is an infinite number of strings, but a finite number of hash codes, so two different strings could theoretically have the same hash code.
1. Although there's a finite number of hash codes, the indexed array will always be smaller, so two items with different hash codes can be mapped to the same index.

#### A Good Hash Function...

1. is fast. 
1. doesn't map different strings to the same hash codes.
2. doesn't cluster hash code outputs at specific indices.
3. is deterministic (**same input yields the same output**) or consistent.

<br>

### Set/ Get

1. Accepts a key and a value 
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

<br>

### Collisions

Collisions happen when a hashed key ends up matching the hash of a different key.

This would mean that we would end up putting the value in our array at the same index as another value. There are several different ways to address this issue. Open addressing involves finding a new index that is available; today, though, we will be looking at closed addressing which is a technique that involves storing multiple values at a single index. While it's less efficient, we are not limited by the amount of keys that we can store, which makes it convenient.

#### Closed Addressing

![](https://he-s3.s3.amazonaws.com/media/uploads/0e2c706.png)

<br> 

### Big O of Hash Tables

The biggest benefit of hash tables, time complexity! 

That said, this does depend on how good your hash function is... How fast is it and how evenly does it distribute things, which would minimize the number of collisions, etc.

![Big O](https://media.git.generalassemb.ly/user/19642/files/56eef480-fe6a-11e9-959f-2d1fbe1f2f83)

<br> 

### Cryptographic Hashing

Blockchain

![crypto-hash](https://media.git.generalassemb.ly/user/19642/files/c6d3ac80-ff48-11e9-8940-37646088a9a1)

Blockchain technology uses a special branch of hashing that involves cryptography. If you are interested in this area you can use some pretty complex hash algorithms in your applications with these npm packages.

- https://www.npmjs.com/package/md5
- https://www.npmjs.com/package/js-sha256

These are just two popular examples, but there are many more.

#### Authentication

Another place we see hashing is with Authentication. We'll talk about this process in much greater detail later! One approach to Auth is to use bcrypt or json web tokens (JWT) to hash your data. You can get familiar with the concept here if you're interested.

- [jwt](https://blog.angular-university.io/angular-jwt/).
- [password hashing](https://www.theguardian.com/technology/2016/dec/15/passwords-hacking-hashing-salting-sha-2)

<br>

### Time for an exercise!

Complete the methods and classes defined in `HashTable.js` according to the specifications in the comments.

> **Note:** The second myGA module, Hash Tables Deep Dive, links out to CodePen for a code challenge for a hash table. It's recommended that you complete **both** myGA modules on hash tables before attempting the exercise in order to give you all the tools you need to implement the table.
