// create random values between 0 to 10
function randomNumber(){
    return Math.floor(Math.random()*11);
}

// created wait function to use it outside
function wait(){
    return new Promise(function (resolve,reject){
        let randomNum = randomNumber();
       if(randomNum % 5 == 0){
           setTimeout(()=>{
               resolve(randomNum);
           },2000);
       } else{
           setTimeout(()=>{
                reject(new Error(`${randomNum} is not divisible by 5`));    
           },3000);
       }
    });
}

// .then is called when resolve triggered , .catch called when reject triggered , .finally called always 
wait().then((num)=>{
    console.log(`resolve triggered: ${num} is divisible by 5`);
}).catch((error)=>{
    console.log(`reject triggered:\n    ${error}`);
}).finally(()=>{
    console.log("finally always triggered: promise setteled");
});


// --------------------------------------------------
// OUTPUT
// --------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.1.js
// reject triggered:
//     Error: 7 is not divisible by 5
// finally always triggered: promise setteled

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.1.js
// resolve triggered: 5 is divisible by 5
// finally always triggered: promise setteled