function vowelsCount(str){
    const map = new Map();

    map.set('a',0);
    map.set('e',0);
    map.set('i',0);
    map.set('o',0);
    map.set('u',0);

    for(let i=0;i<str.length;i++){
        map.has(str[i].toLowerCase()) ? map.set(str[i].toLowerCase(),map.get(str[i].toLowerCase())+1):false;
    }

    return map;
}

console.log(vowelsCount("HELLO counting VoWels"));

// ------------------------------------------------
// OUTPUT
// ------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5> node .\Assignment-5.2.js        
// Map(5) { 'a' => 0, 'e' => 2, 'i' => 1, 'o' => 3, 'u' => 1 }