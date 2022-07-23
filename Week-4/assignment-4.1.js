// created required states
const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
  }
  
// created our won promise class
  class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
  
    constructor(cb) {
      try {
        // setting parameters to promises
        cb(this.#onSuccessBind, this.#onFailBind)
      } catch (e) {
        this.#onFail(e)
      }
    }
  
    #runCallbacks() {
      if (this.#state === STATE.FULFILLED) {
        this.#thenCbs.forEach(callback => {
          callback(this.#value)
        })
  
        this.#thenCbs = []
      }
  
      if (this.#state === STATE.REJECTED) {
        this.#catchCbs.forEach(callback => {
          callback(this.#value)
        })
  
        this.#catchCbs = []
      }
    }
  
    // implementing the parameters
    #onSuccess(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind)
          return
        }
  
        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
      })
    }
  
    #onFail(value) {
      queueMicrotask(() => {
        if (this.#state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.#onSuccessBind, this.#onFailBind)
          return
        }
  
        if (this.#catchCbs.length === 0) {
          throw new UncaughtPromiseError(value)
        }
  
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
      })
    }
  
    // implementing the .then, .catch , .finally
    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        this.#thenCbs.push(result => {
          if (thenCb == null) {
            resolve(result)
            return
          }
  
          try {
            resolve(thenCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#catchCbs.push(result => {
          if (catchCb == null) {
            reject(result)
            return
          }
  
          try {
            resolve(catchCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#runCallbacks()
      })
    }
  
    catch(cb) {
      return this.then(undefined, cb)
    }
  
    finally(cb) {
      return this.then(
        result => {
          cb()
          return result
        },
        result => {
          cb()
          throw result
        }
      )
    }
  
    // creating function resolve , reject
    static resolve(value) {
      return new Promise(resolve => {
        resolve(value)
      })
    }
  
    static reject(value) {
      return new Promise((resolve, reject) => {
        reject(value)
      })
    }
} 


// create random values between 0 to 10
function randomNumber(){
    return Math.floor(Math.random()*11);
}

// created wait function to use it outside
function wait(){
    return new MyPromise(function (resolve,reject){
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
//     Error: 6 is not divisible by 5
// finally always triggered: promise setteled

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.1.js
// reject triggered:
//     Error: 8 is not divisible by 5
// finally always triggered: promise setteled

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.1.js
// resolve triggered: 10 is divisible by 5
// finally always triggered: promise setteled