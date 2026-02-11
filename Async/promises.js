//---------*********----------Promises-----********----------






// const p = new Promise((resolve, reject) => {
//      resolve("sab theek hai"); // Only the FIRST resolve/reject works jisko phele call lgegi voh phele call hoga baaki se mtlb nhi h iss code m

//   reject("Big Block error");
 
// });
// p.then((value) => {//resolve then k andar jata h.
//   console.log(value); //succes mil jayegi
// }).catch((error) => {  //reject catch k andar jata h.
//   console.log("error hai", error); //error handle  in this part
// });







// console.log(" 1) Start");

// const p = new Promise((resolve, reject) => {
//   console.log("2) Promise created ");
//   setTimeout(() => {
//     resolve("3) Work finished");
//   }, 1000);
// });
// console.log("4) After creating promise");

// p.then((value) => {
//   console.log(value); // runs AFTER resolve(...)
//   console.log("5) then() runs only when promise is resolved");
// });

// console.log("6) End (JS keeps running; then will run later)"); 

//output
//1) Start
// 2) Promise created
// 4) After creating promise
// 6) End (JS keeps running; then will run later)
// 3) Work finished
// 5) then() runs only when promise is resolved




// function roll(num, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Roll. no. is " + num);
//       resolve(num); // pass value to next step
//     }, delay);
//   });
// }
// roll(12212, 1000)
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12312, 2000);
//   })
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12412, 3000);
//   })
//   .then(() => {
//     console.log("wait its almost over");
//     return roll(12512, 4000);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     console.log("Done with viva)");
//   });


  //another way to handle it


// roll(12212, 1000)
//   .then(() => (console.log("downloading..."), roll(12312, 2000)))
//   .then(() => (console.log("downloading..."), roll(12412, 3000)))
//   .then(() => (console.log("almost over..."), roll(12512, 4000)))
//   .catch(console.log)
//   .finally(() => console.log("Done with viva)"));
