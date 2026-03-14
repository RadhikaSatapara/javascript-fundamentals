const name = "radhika"
const age = 20

// console.log(name + age);
console.log(`hello my name is ${name} and my age is ${age}`);
console.log(name[0])
console.log(name.__proto__);
console.log(name.length)

const  newstring = name.substring(0,4)
console.log(newstring);

const anotherString = name.slice(-8,4)
console.log(anotherString);

const newStringOne = "  radhika    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://radhika.com/radhika%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('radhika'))
console.log(url.split('-'))