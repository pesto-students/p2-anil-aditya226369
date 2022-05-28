function add(a,b){
    return a+b
}

function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log("fn called with key: "+key)
        console.log(cache)
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,fn(...args));
        return cache.get(key);
    }
}

const memoizeAdd = memoize(add);

function time(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
    console.log("----------------------");
}

time(()=>memoizeAdd(100,100));
time(()=>memoizeAdd(100));
time(()=>memoizeAdd(100,200));
time(()=>memoizeAdd(100,100));


// Output:
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-3\Assingment-3.1> node .\memoize-3.1.js
// fn called with key: 100,100
// Map(0) {}
// 200
// default: 12.477ms
// ----------------------
// fn called with key: 100
// Map(1) { '100,100' => 200 }
// NaN
// default: 3.895ms
// ----------------------
// fn called with key: 100,200
// Map(2) { '100,100' => 200, '100' => NaN }
// 300
// default: 5.873ms
// ----------------------
// fn called with key: 100,100
// Map(3) { '100,100' => 200, '100' => NaN, '100,200' => 300 }
// 200
// default: 1.374ms
// ----------------------
