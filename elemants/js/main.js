console.log(4); //print some thing 
var age = 19;
var age2 = 23;
var result = age + age2;
var name = "sadi";
console.log("ddd");
var iscool = true; //bolean type variable
console.log(typeof iscool, typeof (name), typeof age); //typeof will said which type the variable is 
var nsi_dfdfd = "kkdfk"; //sting type variable
console.log(nsi_dfdfd);
var promise = "i am Naimur rahman brother JKJKlks ifdsjfkdsjfkds ";
var low = promise.toUpperCase(); //text will trasnfrom in uppercase 
console.log(low);
console.log(low.indexOf("NAIMUR")); //idnexOf will show the position of it  the in variable 
console.log(low.split(""));//it will separet every word and space in string 
var n1 = 44;
var n = 33.24534344344;
var n5 = 33.24534344344;
var n2 = " 30.3";
n2 = parseInt(n2); //variable convertar int (shortcart tecnic > variable_name= +variable_name) type .......parseFloat
console.log(n2);
var n3 = 4;
n3 = "" + n3;
console.log(typeof n3);
var total = n5 + n;
total = total.toFixed(2);//how many number it will show after desimal number 
console.log(total);
var results = n2 + " " + n3;
console.log(results);
var negativeNumber = -3.53334;
var absoluteNumber = Math.abs("ABSULUTE NUMBER", negativeNumber);//convarter of negative number to positive number 
console.log("negativer number convertet into positive: ", absoluteNumber);
var roundedNumber = Math.round(absoluteNumber);//it will round the number . doshomikh ar pore 4 ar besi thakle number ar shathe ak jog korbe
console.log("this number is rounded ", roundedNumber);
var ceilNumber = Math.ceil(absoluteNumber);//if there is more then none  after desimal the number will increase 1 (0 thakleo barbe)
console.log("this is the ceil number ", ceilNumber);
var floorNumber = Math.floor(absoluteNumber);//it is opositiv of ceil numvber
console.log("this it floor Number", floorNumber);
var random = Math.random() * 100;//math.random wll pick up random number in between 0 to 1
random = Math.round(random);
console.log(random);


if (n1 < n2) {
    console.log("big");

}
else {
    console.log("small");
}
var job = true;
var bank = 1000;
if (job == true && bank > 100) {
    console.log("you can ");
}
else {
    console.log("get out from here");
}
if (job == false || bank > 100000) { //or ||
    console.log("you or ");
}
else if (job == true) {
    console.log("job is true");
}
else {
    console.log("get out from here or");
}

var date = new Date("2002-11-27");//show date make sure that d is capital latter and a speach between w and d
console.log(date);
var type = typeof n2;
type = type.toUpperCase();
console.log(type);
//var .var(); its retrun value 
// .parse(var )its need another variable to show variable 
function argeu(num) {//the arguments is inbuilt thing that can show how many valu we pass in function though we declare 1 perameter 
    console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
        sum = sum + element;

    }
    console.log("sum of total pass vale ", sum);
}
argeu(1, 5, 1, 5, 5525, 2, 5);

// time need to run program
// var start = new Date().getTime();

// for (i = 0; i < 500; ++i) {
//     // do something
//     console.log(i);
// }

// var end = new Date().getTime();
// var time = end - start;
// time = time / 1000;
// console.log('Execution time: ' + time);
var animur = ["s", "sadi"];
var news = animur.indexOf("sadi");
animur[news] = "me";
animur.push("ki");
var lastElement = animur.pop();
var first = animur.shift();
console.log(animur);
console.log(first);
console.log("sadi" == "sadi");


var number = 0;
while (number < 10) {
    number++;
    console.log(number);
}
var student1 = {
    id: 123,
    color: "blue",
    marks: 35
};
student1.marks++;
student1["marks"] = 23444;
console.log(student1.marks);
switch (number) {
    case 'blue':
        console.log("blue");
        break;
    case 'red':
        console.log("red");
        break;
    default:
        console.log("default");
}

function inchToFeet(inch) {
    let feet = inch / 12;
    console.log(feet);

}
inchToFeet(12);
// mile to km 
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var hihow = mileToKilometer(334);
console.log(hihow);

// jor na berjor
function jor(number) {
    if (number % 2 == 0) {
        console.log("jor re vai");
    }
    else {
        console.log("salai bejoor");
    }
}
jor(34434987387);

function leapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    return false;

}

let year = leapYear(2100);
console.log(year);

function fect(num) {
    var factorials = 1;
    for (let i = 1; i <= num; i++) {
        const element = i;
        factorials = factorials * element;
    }
    console.log(factorials);
}
fect(4);
// var sre = 1;
// function recursive(num) {

//     if (num == 1) {
//         return sre;
//     }
//     else { 
//         sre = sre * num;

//         num--;

//         return recursive(num);
//     }

// }
function recursive(num) {

    if (num == 1) {
        return 1;
    }
    return num * recursive(num - 1);


}
var res = recursive(5);

console.log("s", res);

// exam recursive

// function exam(marks) {
//     if (marks <= 30) {
//         return "fail";
//     }

//     else if (marks == normal) {
//         return "hi 100";
//     }
//     else {
//         console.log(marks, "marks");
//         return marks + exam(marks + 10);
//     }
// // }
// var totals = exam(40);
let hero = 3;
let zero = 45;
let tem = hero;
hero = zero;
zero = tem;

// destructuring 
[hero, zero] = [zero, hero];
console.log(hero, zero);
//large number 
var max = Math.max(24, 245, 2424, 2);
console.log(max);
// let fibo = [0, 1];
// let ns = 12;
// for (let i = 2; i < ns; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     console.log("fibo for", element);
// }
// console.log(fibo);

function bibo(nth) {
    if (nth == 0) {
        return [0];
    }
    else if (nth == 1) {
        return [0, 1];
    }
    const fibo = bibo(nth - 1);
    fibo[nth] = fibo[nth - 1] + fibo[nth - 2];
    return fibo;
}
let hibibo = bibo(23);
console.log("hi", hibibo);

const duplicateArray = ["sadi", "dad", 'ping', 'sadi'];
const unique = [];
for (let i = 0; i < duplicateArray.length; i++) {
    const element = duplicateArray[i];
    if (unique.indexOf(element) == -1) {
        unique.push(element);
    }
}

function dupArray(array) {
    let un = [];
    for (const element of array) {
        if (un.indexOf(element) == -1) {
            un.push(element);
        }
    }
    return un;
}
let checkingDup = dupArray(duplicateArray);
console.log('duplicate array', checkingDup);

let kiso = "naimur"
let revers = '';
for (const latter of kiso) {
    revers = latter + revers;

}
scon(revers);
function scon(so) {
    console.log(so);
}
const allinOne = [
    { name: "sadi", price: "20", quantity: "2" },
    { name: "boi", price: "400", quantity: "1" },
    { name: "boi", price: "10", quantity: "1" },

]
let productTotal = 0;
for (const products of allinOne) {

    productTotal = productTotal + (products.price * products.quantity);

}
console.log(productTotal);
//searching thing by js

const products = [

    'kd eidf lorem',
    'lorem sefdf dsf sadi',
    'dfedrer 33er loreM'
];
const output = [];
const searching = 'lorem';
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching) != -1) {
//         output.push(product);
//     }

// }
// includes will return true or false ----------------- -
// for (const product of products) {
//     if (product.toLowerCase().includes(searching)) {
//         output.push(product);
//     }

// }
// start with -----------------
// for (const product of products) {
//     if (product.toLowerCase().startsWith(searching)) {
//         output.push(product);
//     }

// }
//ends with same thing like up thing 
for (const product of products) {
    if (product.toLowerCase().endsWith(searching)) {
        output.push(product);
    }

}
console.log('output', output);
console.log(searching.split(''));

//split name to one word name 
const yourName = "naimur rahman";
const oneWord = yourName.split('a');
// let allWord = '';
// for (const word of oneWord) {

//     allWord = allWord + word;
// }
// with join method
let allWord = oneWord.join('');
console.log('your join name', allWord);

//deferent between slice and substr
console.log('slice your name ', yourName.slice(1, 5));//end 5 will ---- index 5 are porbo porjonto idbo 
console.log('substr your name ', yourName.substr(1, 5))// end 5 will --- one ar por koita string dorker
// string Substring
console.log('substring your name ', yourName.substring(1, 5));//same as slice

// concat is just like +ing tow string -------------
// concat can also + tow array
const ourArray = [223, 23244, 2323334, 4545]
const ourArray2 = [223, 23244, 2323334, 4545]
const combine = ourArray.concat(ourArray2);
console.log(combine);
//splice will thing remove form and replece element after 2 perameter  array------------
combine.splice(3, 2, 'sadi');//after 3 index   2 element will count as remove....3 index also count
console.log(combine);

// to sortet an array--------------
// this shot function will organje the array item as small to big
const ourSortArray = [323, 134, 1, 32, 2, 5, 4];
const sortet = ourSortArray.sort(function (a, b) {
    return a - b;
});
console.log("sortet array", sortet);

//checking array is arry-----------
const hiArray = [];
if (Array.isArray(hiArray)) {
    console.log('this will return boleen type')
}
// learning about error
const myName = "sadi";

// try {
//     myName = 'dfdf'
// }
// catch (error) {
//     console.log(error);
// }
// date game 
const ourDate = new Date('1971-3-26');
console.log(ourDate);
const anotherDate = new Date(1971, 3, 26, 1, 1, 1);
console.log(anotherDate);

const string = ["kier ki khover", "kier ki khover2"];
console.log(string.join(' '))