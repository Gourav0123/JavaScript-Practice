const gameName = new String('Gourav');

console.log(gameName[0]);  //G
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //6
console.log(gameName.toUpperCase());   //GOURAV
console.log(gameName.charAt(2));  //u

const newString = gameName.substring(0,4);  
console.log(newString);   //Gour

const anotherString = gameName.slice(1, 4);
console.log(anotherString);

const newStringOne = "    Gourav Chaudhary    "; 
console.log(newStringOne);   //_______Gourav_______     
console.log(newStringOne.trim());  //Gourav  ---- remove the extra spaces 

const url = "https://gourav.com/gourav%20chaudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
