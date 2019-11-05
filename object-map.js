//======================= Object =========================

// Example 1 
let objectOne = {};

let first = { id: 1 }

objectOne["zero"] = "hey"
objectOne[first] = "dino";
// A key can't be anything but string
console.log(objectOne[first]); // => { zero: 'hey', '[object Object]': 'dino' }

// ======= Example 2 ========
let objectTwo = new Object()

// We can access set a key to a value and reassign it
objectTwo['hey'] = "dino"
objectTwo['whatever'] = 'new Dino'
objectTwo['hey'] = 'how are you?'
console.log(objectTwo)


//==================== Map() ==============================
console.log('\n');
//creating an instance of Map()
let map = new Map();


let firstKey = { id: 1 }
let secondKey = { id: 2 };

//mapping non-string key to a value
map.set(firstKey, "foo");
map.set(secondKey, "bar");

console.log('value of first key is ', map.get(firstKey));
console.log('\n');
console.log('value of second key is ', map.get(secondKey));
console.log('\n');
console.log('value of key using with bracket notation - ', '\n', map[firstKey])
console.log('\n');
console.log("Before deletion",map)
console.log('\n');
map.delete(firstKey);
console.log('After deletion',map)
console.log('\n');
console.log(`length is ${map.size}`);
map.clear();
console.log('\n');
console.log(map)


let newFirst = { id: 1 }, newSecond = { id: 2 };

map = new Map([
  [newFirst, 'Here we go'],
  [newSecond, "again"]
])

console.log('\n');
console.log("Here it is",map)

// create a copy of that map using .entries()

let mapCopyOne = new Map(map.entries());
//or 
let mapCopyTwo = new Map(map);

console.log('\n');
console.log("first copy",mapCopyOne);
console.log('\n');
console.log("second copy", mapCopyTwo);


// get the list of values
let values = [...map.values()];
console.log(values);


