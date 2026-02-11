//  call stack event loop.

// console.log("first");
// console.log("sec");
// console.log("third"); //fifo jo phele aaye voh phele execute. 

//asychornous prograaming.......
//if there are any thing that takes time and that does not affect coming operations this is called as asynchronous programming



// function aa(){
//     console.log("first");
// }

// setTimeout(aa,2000); //hault 2 sec ruk k output dega.


// setTimeout(()=>{
//       console.log("first");

// },4000
// ); //another way of calling.


//---------*******----- SET INTERVAL------******----------

//kitne sec baad hum baar baar execute karna chah ra h.
// setInterval(()=>{
//       console.log("first");
// },2000); //it infinitely show first to stop this use like this show in next code

// let count =0;

// let id = setInterval(()=>{
//       console.log("first");
//       count++;
//       if(count ===5){
//         clearInterval(id);
        
//       }
// },2000);


// //--------execute ecah number at same time------


// function roll(num,next){
//     setTimeout(()=>{
//         console.log("Roll no.is"+num);
//         if(next)
//             next();
//     },1000);
// }

// roll(12212,()=>{
//     console.log("wait its getting download");

// roll(12312,()=>{
//     console.log("wait its getting download");

// roll(12412,()=>{
//     console.log("wait its getting over");
//     roll(12512);


// });
// });
// });









//---question execute each number at differ time-----

// function roll(num,delay,next){
//     setTimeout(()=>{
//         console.log("Roll no.is"+num);
//         if(next)
//             next();
//     },delay );
// }

// roll(12212,2000,()=>{
//     console.log("wait its getting download");
// });

// roll(12312,4000,()=>{
//     console.log("wait its getting download");
// });

// roll(12412,6000,()=>{
//     console.log("wait its getting over");
//     roll(12512);


// });


// //consider a following js program it main tain two array ui team and flutterteam

// // Two arrays
// const uiTeam = ["HTML", "CSS", "JavaScript"];
// const flutterTeam = ["Dart", "Flutter", "Firebase"];


// function showMenu() {
   
//     const mergedTeam = [...uiTeam, ...flutterTeam];
//     return mergedTeam;
// }


// const result = showMenu();
// console.log(result);













