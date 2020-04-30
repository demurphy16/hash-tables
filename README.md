# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

![](https://media.giphy.com/media/U1rlk8zdcAwbm/giphy.gif)

## Data Structures Cont'd: Hash Tables, AKA Hash Maps

### Lesson Objectives

1. Define a hash table 
1. Define a hashing algorithm
1. Understand collisions and strategies for accounting for them

### Introducing Hash Tables

What *are* hash tables?

<details><summary>Reveal Answer</summary>
    
<br>

- An unordered, associative array abstract data type which maps **keys** to **values** for efficient lookup.
- Utilizes a **hash function** to generate an **index**, or hash code, with an associated bucket, or value.

</details>

Why are hash tables useful?

<details><summary>Reveal Answer</summary>
    
<br>
    
- Hash tables are incredibly efficient and are built-in with almost every programming language.
- They are "possibly the **most useful data structure for interviews**– in fact, one technique I often tell people is that, for any problem in an interview, have a hash table at the top of your mind for a solution." (Gayle Laakmann McDowell, Author of Cracking the Coding Interview)

</details>

### Hashes

Unlike arrays, hash tables are extremely efficient for finding values, adding new values, and removing values. To store a piece of data in a hash table, a key is mapped to a number in a range of 0 through the hash table size, using the hash function.

### Hash Functions

In order to look up values by the hash key, we need a way to convert the keys into valid array indices. The function that performs this task is called a **hash function**.

A hash function takes a string as an input, and converts it to an integer, then remaps that integer into the array.

For example... Suppose you work at a grocery store, and you want to look up the price of the different products. Imagine they are not alphabetized, which means that, if you were to find the product, it will take you O(n) runtime. Now imagine products were in alphabetical order; applying the binary search will take O(log n) runtime. 

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

## Set/ Get

1. Accepts a key and a value 
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining


## Collision

Collision happens when a hashed key ends up matching the hash of a different key. This would mean that we would end up putting the value in our array at the same index as another value. There are several different ways to address this issue. Open addressing involves find a new index that is available. Today, we will be looking at closed addressing which is a technique that involves storing multiple value at a single index. While less efficient, we are not limited by the amount of keys that we can store.

#### Closed Addressing

![](https://he-s3.s3.amazonaws.com/media/uploads/0e2c706.png)

## Big O of Hash Tables
Fantastic time complexity! However, this does depend on how good your hash function is.. How fast is it and how evenly does it distribute things, which would minimize the number of collisions. This is why it is often best to use built in hash function instead of writing your own. 

![Big O](https://media.git.generalassemb.ly/user/19642/files/56eef480-fe6a-11e9-959f-2d1fbe1f2f83)



## Cryptographic hashing

![crypto-hash](https://media.git.generalassemb.ly/user/19642/files/c6d3ac80-ff48-11e9-8940-37646088a9a1)

Blockchain technology use a special branch of hashing that involved cryptography. If you are interested in this area you can use some pretty crazy hash algorithms in your applications with these npm packages.

https://www.npmjs.com/package/md5


https://www.npmjs.com/package/js-sha256

These are just two popular examples, but there are many more.

## Authentication

Another place we see hashing is with Authentication.
We are going to talk about this process in more detail later! One approach to Auth is to use bcrypt or json web tokens (JWT) to hash your data. You can get familiar with the concept here if you're interested.
[jwt](https://blog.angular-university.io/angular-jwt/).
[password hashing](https://www.theguardian.com/technology/2016/dec/15/passwords-hacking-hashing-salting-sha-2)

### Other Applications:

1. Cacheing - refers to storing the result of an operation so that future request return faster. 

  - Imagine a database or a server that handles a lot of requests at the same time, the more it handles, the slower it becomes. The cache works as a hash table. If we need to access data, the browser can pull it from the cache instead of the original server because it has stored the user’s activity. It first checks the cache, and if the requested data is found, it's called a **cache hit**. If the requested data isn't found in the cache -- a situation known as a **cache miss** -- the browser makes the request and saves the data into the cache for future use. 

  ```python
  cache = {}
  
  def get_page(url):
    if cache.get(url):
      return cache[url]
    else 
      data = get_data_from_server(url)
      cache[url] = data
      return data
  ```


2. Hash functions are used in various algorithms to make their computing faster

# Initial Table Size

If you know how many keys you expect to have in an object, your hash table should be an array with 1.3 times the expected number of keys rounded up to the next prime number. [- UCSD](http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-8.html)

### Time for an exercise!

Complete the methods and classes defined in `HashTable.js` according to the specifications in the comments.

> **Note:** The second myGA module, Hash Tables Deep Dive, links out to CodePen for a code challenge for a hash table.

It's recommended that you complete **both** myGA modules on hash tables before attempting the exercise in order to give you all the tools you need to implement the table.
