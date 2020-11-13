## Select a random item from an array

Simple code to select a random item from an array of items

```javascript
let arp = require("arrayrandompicker");
var input = [
                {name: "Ted", age : 34},
                {name: "Jill", age : 49},
                {name: "Harris", age : 19},
                {name: "Yuri", age : 345}
            ]
var output = arp.selectRandomArrayItem(input);

console.log(output);
// {name: "Ted", age : 34}
```

Or also return the Index of the randomly selected item

```javascript
let arp = require("arrayrandompicker");
var input = [
                {name: "Ted", age : 34},
                {name: "Jill", age : 49},
                {name: "Harris", age : 19},
                {name: "Yuri", age : 345}
            ]
var output = arp.selectRandomArrayItem(input, true);

console.log(output);
/*
    {
        key: 2,
        value: {name: "Harris", age : 19}
    }
*/ 
```

if you like check the rest of my projects at https://github.com/TechDevils
and maybe checkout
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M31JOPH)
