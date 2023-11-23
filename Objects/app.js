// // let car1Name = "Alto";
// // let car1Color = "Red";
// // let car1Model = 2015;
// // let car1Company = "Shuzuki";

// // let car2Name = "Corola";
// // let car2Color = "Grey";
// // let car2Model = 2015;
// // let car2Company = "Honda";

// // let car3Name = "City";
// // let car3Color = "Black";
// // let car3Model = 2015;
// // let car3Company = "Toyota";

// // let car1 = {
// //     name : "Corola",
// //     color : "Red",
// //     model : 2016,
// //     company:"Honda"

// // }
// // console.log(car1.name,car1.color,car1.model,car1.company);
// // console.log(car1)
// // console.log(Object.keys(car1))
// // console.log(Object.values(car1))
// // console.log(Object.entries(car1))
// // alto civic city 
// //declare object, update value, delete key, check prop
// let car1Name = "Alto"
// let car1Color = "White"
// let car1Model = 2015
// let car1Company = "Suzuki"

// let car2Name = "Corolla"
// let car2Color = "Grey"
// let car2Model = 2015
// let car2Company = "Toyota"

// let car3Name = "City"
// let car3Color = "Black"
// let car3Model = 2023
// let car3Company = "Honda"
// // wrong approach
// // let car1 = ['Alto', "white", 2015, "Suzuki"]
// // let car2 = ['Alto', "white", 2015, "Suzuki"]
// let car1 = {
//     name: "alto",
//     color: "white",
//     year: 2016,
//     made: "suzuki",
//     owner: "self"
// }
// let car2 = {
//     name: "corolla",
//     color: "grey",
//     year: 2016,
//     made: "toyota"
    
// }
// let car3 = {
//     name: "civic",
//     color: "grey",
//     year: 2016,
//     made: "toyota"
    
// }
// console.log(car1.color, car1.name, car1.made)
// console.log(car1);
// // console.log(Object.keys(car1));
// // console.log(Object.values(car1));
// // console.log(Object.entries(car1));
// car1.year = 2015
// console.log(car1);
// delete car1.owner; // will delete owner key val
// console.log(car1);
// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json())
//     .then(res => console.log(res))
// }

//literal object
// let student1 = {
//     name : 'Faiza',
//     id : 1234565,
//     course : 'WebDevelopmentandMobileAppDevelopment',
//     classes : ['Thursday','Sunday'],
//     fees : 500
// }
// let student2 = {
//     name : 'Faiza',
//     id : 1234565,
//     course : 'WebDevelopmentandMobileAppDevelopment',
//     classes : ['Thursday','Sunday'],
//     fees : 500
// }
// function Student(name,roll,course,classes,fees) {
//     this.name = name;
//     this.roll = roll;
//     this.course = course;
//     this.classes = classes;
//     this.fees = fees;

// }
// var studentOne = new Student('Mehwish','123','web',['Thursday','Sunday'],500);
// console.log(studentOne)
// var studentTwo = new Student('Faiza','456','web',['Thursday','Sunday'],500);
// console.log("🚀 ~ file: app.js:109 ~ studentTwo:", studentTwo)
// var studentThree = new Student('Sara','789','web',['Thursday','Sunday'],500);
// console.log("🚀 ~ file: app.js:111 ~ studentThree:", studentThree)

// done objects by using class
// class Teacher{
//     constructor(name,employ,course,classes,salary) {
//     this.name = name;
//     this.employ = employ;
//     this.course = course;
//     this.classes = classes;
//     this.salary = salary;

//     }
// }
// let tea1 = new Teacher('Faiza','1234','web',['Thursday','Sunday'],123456);
// console.log("🚀 ~ file: app.js:125 ~ tea1:", tea1)
// let tea2 = new Teacher('Hina','3456','web',['Thursday','Sunday'],123456);

// var plan1 = {
//     name :'Gold',
//     price : 1000,
//     calcDiscount : function (discount) {
//         let dis = plan1.price - (plan1.price * discount/100)
//         return dis
//     }
// }
// console.log(plan1.name,plan1.calcDiscount(20))
// var plan2 = {
//     name :'Silver',
//     fess : 500,
//     discount : '10%'
// }

// var name1 ={
//     name : 'Syeda Faiza',
//     displayName :function () {
//          return `AOA ${name1.name}` 
//     }
// }
// console.log(name1.displayName())




























