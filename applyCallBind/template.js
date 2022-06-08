

/*let obj1 = {
    number11: 10,
    number21: 20,
}
let obj2 = {
    number1: 30,
    number2: 50,
}
function addNumbers(num){
    
		console.log(this.number1 + this.number2 + num );
}
addNumbers(100);
*/


//CALL FUNCTION
/*
let obj1 = {
    number1:10,
    number2:20
}
let obj2 = {
    number1:30,
    number2:50
}

function addNumbers(num) {
    console.log(this.number1 + this.number2 + num);

}

addNumbers.call(obj1,100);
addNumbers.call(obj2,100);

*/

//APPLY FUNCTION

/*
   let obj1 = {
    number1:10,
    number2:20
}
    let obj2 = {
    number1:30,
    number2:50
}

function addNumbers(num,num2,num3) {
    console.log(this.number1 + this.number2 + num + num2 + num3);

}

addNumbers.apply(obj1,[100,50,50]);
addNumbers.apply(obj2,[100,75,125]); 


 */
//bind()
/*
 let obj1 = {
    number1:10,
    number2:20
};

function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}


let copyFunc = getNumbersTotal.bind(obj1);

console.log(copyFunc(30,40));


*/

 let object1={
     firstName:"Baris",
     lastName:"Aktas",
 }

 function printFullName(country,city){
     console.log(this.firstName+" "+this.lastName+" "+country+" "+city)
 }
 printFullName()

//Yukarıddi kod undefined sebebi iledir.



//Fonksiyonlar hemen çalışcak

 printFullName.call(object1,"Turkey","Izmir");

 let object2={
    firstName:"Mehmet",
    lastName:"Yilmaz",
 }

 printFullName.call(object2,"Turkey","Bursa");

 printFullName.apply(object2,["Turkey","Bursa"]);

 //bind()

 let printMyName=printFullName.bind(object2,"Turkey","Bursa");

 printMyName(); //Fonksiyonu istediğimiz zaman çağırabiliriz.