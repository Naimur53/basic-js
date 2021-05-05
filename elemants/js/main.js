console.log(4); //print some thing 
var age = 19;
var age2 = 23;
var result = age+age2;
var name ="sadi";
console.log( "ddd");
var iscool =true; //bolean type variable
console.log(typeof iscool, typeof (name),typeof age); //typeof will said which type the variable is 
var nsi_dfdfd = "kkdfk"; //sting type variable
console.log(nsi_dfdfd);  
var promise = "i am Naimur rahman brother JKJKlks ifdsjfkdsjfkds ";
var low = promise.toUpperCase(); //text will trasnfrom in uppercase 
console.log(low);
console.log(low.indexOf("NAIMUR")); //idnexOf will show the position of it  the   in variable 
console.log(low.split(""));//it will separet every word and space in string 
var n1 = 44;
var n=33.24534344344;
var n5=33.24534344344;
var n2 =" 30.3";
n2 =parseInt(n2); //variable convertar int (shortcart tecnic > variable_name= +variable_name) type .......parseFloat
console.log(n2);
var n3=4;
n3=""+n3;
console.log(typeof n3);
var total = n5 + n;
total=total.toFixed(2);//how many number it will show after desimal number 
console.log(total);
var results=n2+" "+n3;
console.log(results);
var negativeNumber= -3.53334
var absoluteNumber = Math.abs(negativeNumber);//convarter of negative number to positive number 
console.log("negativer number convertet into positive: ",absoluteNumber);
var roundedNumber = Math.round(absoluteNumber);//it will round the number . doshomikh ar pore 4 ar besi thakle number ar shathe ak jog korbe
console.log("this number is rounded ",roundedNumber);
var ceilNumber = Math.ceil(absoluteNumber);//if there is more then none  after desimal the number will increase 1 (0 thakleo barbe)
console.log("this is the ceil number ",ceilNumber);
var floorNumber = Math.floor(absoluteNumber);//it is opositiv of ceil numvber
console.log("this it floor Number",floorNumber);
var random = Math.random()*100;//math.random wll pick up random number in between 0 to 1
random=Math.round(random);
console.log(random);


if(n1<n2){
    console.log("big");

}
else{
    console.log("small");
}
var job =true;
var bank=1000;
if( job==true && bank>100){
    console.log("you can ");
}
else{
    console.log("get out from here");
}
if( job==false || bank>100000){ //or ||
    console.log("you or ");
}
else if (job==true){
    console.log("job is true");
}
else{
    console.log("get out from here or");
}

var date = new Date("2002-11-27");//show date make sure that d is capital latter and a speach between w and d
console.log(date);