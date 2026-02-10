//----****---REST OPERATOR---****-------

// function add(...numbers){ //rest operator(...) is used to do passing noraml number and convert it into array.
//     let total = 0;
//     for(let i in numbers){ //for in loop work on object.
//         total += numbers[i];
//     }
//     return total;


// }
// console.log(add(1,2,3,4,5));


// function add(...numbers){ 
//     let total = 0; //for of work on value not index.
//     for(let i of numbers){ 
//         total += i;
//     }
//     return total;


// }
// console.log(add(1,2,3,4,5));




// let a = [1,2,3,34,45,88];
// let [first , second ,...last] = a; //output is  1 2 [ 3, 34, 45, 88 ]
// console.log(first,second,last);



// let a = [1,2,3,34,45,88];
// let [first , second ,...last] = a; 
// console.log(first,second,...last);     //1 2 3 34 45 88



//-----****------SPREAD OPERATOR----****---------


// let a = [1,2,3,4];
// let b = [7,8,9,9];
// let merged = [...a,...b];
// console.log(merged); //merged the array.


// const aa=(n)=>{
//     if(n%2==0){
//         console.log( "Even")
//     }
//     else{
//         console.log("Odd")
//     }

// }
// aa(7);



//     const reverseString = str => {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// };

// console.log(reverseString("hello"));



const average = (...num) =>{
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum += num[i] 
    }
     let avg = sum/num.length;
     console.log(avg);
     if(avg>=40){
        console.log("pass");
     }
     else{
        console.log("Fail")
     }
}
average(1,3,4,5,6)


