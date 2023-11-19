var name1 = "Syeda Faiza Naqi";
function countVow(str) {
    let counter = 0;
    for (let i =0 ; i<str.length; i++) {
       if (str[i] == "a" || str[i] == "e" || str[i]== "i" || str[i]== "o" || str[i]=="u") {
        counter++
       }
        
    }
    return  "Vowels = " + counter
}
 var a =  countVow(name1)
 console.log(a)