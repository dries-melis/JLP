//// Console logging

// you can console.log with styles

console.log('%c Styeld loggin', 'color: blue;');




// If you have an array of objects you can log it in a table

let lambo = {type:"huricane", color:"yellow", topspeed:"320"};
let porsche = {type:"spider", color:"black", topspeed:"290"};
let ferrari = {type:"812 superfast", color:"red", topspeed:"350"};


console.table({lambo: lambo, porsche: porsche, ferrari: ferrari});   

let cars = {lambo: {type:"huricane", color:"yellow", topspeed:"320"}, porsche: {type:"spider", color:"black", topspeed:"290"}, ferrari: {type:"812 superfast", color:"red", topspeed:"350"}}
console.table(cars);   
