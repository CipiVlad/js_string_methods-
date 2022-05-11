// console.log("text");


// length

// lev1_1

let nachName = "Ciprian";
let vorName = "Vlad";
let name = nachName + vorName;
console.log(nachName.length);
console.log(vorName.length);
console.log(name.length);

// indexOf
// lev1_2

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));



// search()
// lev1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));


// slice()
// lev1_4

let a = 'Sam is going to coding school';
let myVar;

myVar = a.slice(0, 4);
console.log(myVar);
document.write(myVar + "<br>")


myVar = a.slice(4, 6);
console.log(myVar);
document.write(myVar + "<br>")


myVar = a.slice(7, 29);
console.log(myVar);
document.write(myVar + "<br>")


myVar = a.slice(23, 29);
console.log(myVar);
document.write(myVar + "<br>")


myVar = a.slice(0, 4) + a.slice(4, 6) + a.slice(22, 29);
console.log(myVar);
document.write(myVar + "<br>")


// substring
// lev1_5

let text = 'Sam is back from coding school';

let myVar2;

myVar2 = text.substring(0, 4)
document.write(myVar2 + "<br>");

myVar2 = text.substring(4, 6);
document.write(myVar2 + "<br>");

myVar2 = text.substring(23, 30);
document.write(myVar2 + "<br>");



// substr(start, length)
// lev1_6

let text2 = 'Sam is working at coding school';
// console.log(text2.substr(0, 3));
let myVar3;


myVar3 = text2.substr(0, 3);
document.write(myVar3 + "<br>");

myVar3 = text2.substr(3, 4);
document.write(myVar3 + "<br>");
myVar3 = text2.substr(15, 3) + text2.substr(25, 7);
document.write(myVar3 + "<br>");


// replace(wort, ersatzwort)
// lvl 1_7

let text3 = "Sam is good at coding school";
