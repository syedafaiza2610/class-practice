// var price = 0;
// var menu = prompt("Enter your menu");
// // if (menu === "fish") {
//     price  = 1000
//     document.write("your bill is"+ "  "+price)
// }
// else if (menu === "biryani") {
//     price  = 400;
//     document.write("your bill is"+"  "+ price);

// }
// else if (menu === "pasta") {
//     price  = 800;
//     document.write("your bill is"+ "  "+ price);

// }
// else{
//     price = 100;
//     document.write("your bill is"+"  "+ price);
// }

//switch
// switch (menu) {
//     case "fish":
//         price = 1000;
//         break;
//     case "biryani":
//         price = 400;
//         break;
//     case "pasta":
//         price = 800;
//         break;
//     default:
//         break;

// }
// // document.write("Your bill is" + " " + price)
// var rand =Math.randon() * 4;
// document.write(rand);

// var arr = [1,2,3];
// arr[3] = 9;
// document.write(arr)

// var num = -9 <-25;
// document.write(num)

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=3; j++){
//     document.write(i+" "+j)
// }
// }


// @@ -51,3 +51,18 @@ for (let i = 0; i < nArr.length; i++) {
// }
// console.log("object " + "is our " + "" + "next" + " topic");
// // object is our next topic

// // what will be the result
// for (let i = 1; i <= 2; i++) {
// for (let j = 1; j <= 3; j++) {
//     console.log(i*j)        // 1 2 3 2 4 6 
// }
// }

// // how to update value of the fourth element
// var numArr = [1, 7, 3];
// //a numArr[4] = 6
// //b numArr[3] = 6
// //b numArr[0] = 6
// // what is the operator in which both or either one is true then it gives true
// @@ -21,4 +21,33 @@ if (firstname.length === lastname.length){
//     fullname.push(firstname[i]+lastname[i])
// }
// }
// console.log("🚀 ~ file: quiz.js:22 ~ fullname:", fullname)
// console.log("🚀 ~ file: quiz.js:22 ~ fullname:", fullname)
// // 
// const arr = ["a", "b", "c"]
// // for (let i = 0; i < arr.length; i++) {
// //     document.write(arr[i])
// // }
// // const cleanestCities = ["fsl", "lhr", "mul"]
// // var cityToCheck = "fsl"
// // var len = cleanestCities.length;
// // var matchFound = false;
// // for (var i = 0; i < len; i++){
// //     if (cityToCheck === cleanestCities[i]) {
// //     matchFound = true;
// //     alert("It's one of the cleanest cities");
// //     break;
// //     } 
// // }
// //  if (matchFound === false) {
// //  alert("It's not on the list");
// //  }

// var nArr = [[1, 2, 3, 5], [6, 7], [8, 9]] // 2 dimension array
// // console.log(nArr[1][1]); //4
// for (let i = 0; i < nArr.length; i++) {
// for (let j = 0; j < nArr[i].length; j++) {
//     console.log(nArr[i][j]);       
// }
// }
// console.log("object " + "is our " + "" + "next" + " topic");
// // object is our next topic
// 77 changes: 77 additions & 0 deletions77  
// switch.js
// @@ -0,0 +1,77 @@
// // var price = 0;
// // var menu = prompt("enter menu name");
// // fish 1000, chowmein 400, biryani 300, pasta 500
// // if(menu === "fish") {
// //     price = 1000
// // } else if (menu === "chowmein") {
// //     price = 400

// // }else if (menu === "biryani") {
// //     price = 300
// // } else if (menu === "pasta"){
// //     price = 500
// //     document.write("your bill is ", price)
// //  } else {
// //     price = 100

// // }
// // document.write("your bill is ", price)
// // var price = 0;
// // var menu = prompt("enter menu name");

// /// switch
// // switch (menu) {
// //   case "lobster":
// //   case "fish":
// //     price = 1000;
// //     break;
// //   case "biryani" || "pulao":
// //     price = 300;
// //     break;
// //   case "pasta":
// //     price = 500;
// //     break;
// //   default:
// //     price = 100;
// // }
// // document.write("your bill is ", price);
// var a = 12;
// switch (a > 10) { //true
// case 13:
//     console.log(">10");
//     break;
// case 11:
//     console.log("11");
//     break;
// case true:
//     console.log("true");
//     break;
// default:
// console.log("default");
// break;
// }

// const foo = 0;
// switch (foo) { // 0
// case -1:
// console.log("negative 1");
// break;
// case 0: // Value of foo matches this criteria; execution starts from here
// console.log(0);
// break
// case 1: // no break statement in 'case 0:' so this case will run as well
// console.log(1);
// break; // Break encountered; will not continue into 'case 2:'
// case 2:
// console.log(2);
// break;
// default:
// console.log("default");
// }
// // Logs 0 and 1


// // generate random # 0-5 and use switch to display the num
// var rand = Math.round(Math.random() * 5 )
// console.log("🚀 ~ file: switch.js:76 ~ rand:", rand)


// switch (rand) {
//     case 0:
//          break;
//          case 0:
//             console.log("you entered one")
//             break;
//             case 1:
//                 console.log("you entered one")
//          break;
//          case 2:
//             console.log("you entered one")
//          break;
//          case 3:
//             console.log("you entered one")
//          break;
//          default:
//          break;
// }

