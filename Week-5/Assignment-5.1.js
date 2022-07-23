const tasks={
    doTask1:function(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Done with task1");
            },2000);
        });

        promise.then((value)=>{
            console.log(value);
        });
    },
    doTask2:function(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Done with task2");
            },1000);
        });

        promise.then((value)=>{
            console.log(value);
        });
    },
    doTask3:function(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Done with task3");
            },3000);
        });

        promise.then((value)=>{
            console.log(value);
        });
    }
}


// this is the async/await function

// async function asyncFunction(){
//     await tasks.doTask1();
//     await tasks.doTask2();
//     console.log("done before tasks");
//     await tasks.doTask3();
// }
// asyncFunction();

// output for this async function
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5> node .\Assignment-5.1.js
// done before tasks
// Done with task2
// Done with task1
// Done with task3


// lets see the output for generator function using async

async function* generatorFunction(){
    yield await tasks.doTask1();
    yield await tasks.doTask2();
    console.log("done before tasks");
    yield await tasks.doTask3();
}

const gen = generatorFunction();
// here by first gen.next() we are executing first yield after THEN we are executing next yield
gen.next().then(gen.next()).then(gen.next());

// ----------------------------------------
// OUTOUT
// ----------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5> node .\Assignment-5.1.js
// done before tasks
// Done with task2
// Done with task1
// Done with task3
