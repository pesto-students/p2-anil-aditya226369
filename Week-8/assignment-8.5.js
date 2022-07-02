function town_judge(n,trust_arr){
    if(n == 1) return n;
    const logic_arr = {};
    trust_arr.forEach(([a, b]) => {
        if(!logic_arr[b]) logic_arr[b] = [0, 0];
        if(!logic_arr[a]) logic_arr[a] = [0, 0];
        logic_arr[a][0]++;
        logic_arr[b][1]++;
    });
    for(let key in logic_arr) {
        if(logic_arr[key][0] == 0 && logic_arr[key][1] == n - 1) return key;
    }
    return -1;
}

console.log(town_judge(2,[[1,2]]));
console.log(town_judge(3,[[1,3],[2,3]]));
console.log(town_judge(3,[[1,3],[2,3],[3,1]]));


// ------------------------------------------------
// OUTPUT
// ------------------------------------------------
// PS F:\pesto-sublogic_arrissions\p2-anil-aditya226369\Week-8> node .\assignlogic_arrent-8.5.jsnlogic_arrent-8.5.js
// 2
// 3
// -1