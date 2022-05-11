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
let bad = document.getElementById('bad');
let tom = document.getElementById('tom');
let tennis = document.getElementById('tennis');

// console.log(text3.replace('good', 'bad'));
bad = text3.replace('good', 'bad');
document.getElementById("bad").innerHTML = bad;

// console.log(text3.replace('Sam', 'Tom'));
tom = text3.replace('Sam', 'Tom');
document.getElementById("tom").innerHTML = tom;

// console.log(text3.replace('school', 'tennis'));
tennis = text3.replace('school', 'tennis');
document.getElementById("tennis").innerHTML = tennis;



// toLoverCase(), toUpperCase();
// lvl 1_8

let text4 = "Sam is going to coding school";
console.log(text4.length);

let UPPERCASE = text4.toUpperCase();
document.getElementById('UPPERCASE').innerHTML = UPPERCASE;

let lowercase = text4.toLowerCase();
document.getElementById('lowercase').innerHTML = lowercase;

// -----------------SAM is going to SCHOOL-----------------------------------------------

let slice1 = text4.slice(0, 4);
let upSlice1 = slice1.toUpperCase();

let slice2 = text4.slice(4, 15);

let slice3 = text4.slice(22, 29);
let upSlice3 = slice3.toUpperCase();
let phraseSaM = upSlice1 + slice2 + upSlice3;
// console.log(phraseSaM);
document.getElementById('phraseSaM').innerHTML = phraseSaM;



// ------------------sam IS GOING TO school----------------------------------------------

let slice4 = text4.slice(0, 4);
let lowSlice4 = slice1.toLowerCase();
console.log(lowSlice4);

let slice5 = text4.slice(4, 15);
upSlice5 = slice5.toUpperCase();
console.log(upSlice5);

let slice6 = text4.slice(23, 29);
let lowSlice6 = slice3.toLowerCase();
console.log(lowSlice6);

let phrasesAm = lowSlice4 + upSlice5 + lowSlice6;
console.log(phrasesAm);

document.getElementById('phrasesAm').innerHTML = phrasesAm;

// ------------------Sam Is Going To School----------------------------------------------

// console.log(text4);
let replaceText = "Sam Is Going To School";
// console.log(replaceText);

text4 = text4.replace(replaceText);
console.log(replaceText);
document.getElementById('replaceText').innerHTML = replaceText;


// concat()
// lvl1_9


