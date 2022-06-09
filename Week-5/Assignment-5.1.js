// Async function
// async function asyncFunction(){
//     const res = await fetch("https://api.github.com/users");
//     const result = await res.json();

//     return result;
// }

// console.log(asyncFunction());

// to make async generators we just have to manage the keyword async and await

// we can pause the working of function by using yield in generators

// Async await functionality using generators

async function* generatorFunction(){
    const res = await fetch("https://api.github.com/users");
    yield await res.json();

    return result;
}

const gen = generatorFunction();

gen.next().then(({value,done})=>{
    console.log(value);
});




// -----------------------------------------------------
// OUTPUT
// -----------------------------------------------------

// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
// VM1012:11 
// (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …}
// 1: {login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: '', …}
// 2: {login: 'pjhyett', id: 3, node_id: 'MDQ6VXNlcjM=', avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4', gravatar_id: '', …}
// 3: {login: 'wycats', id: 4, node_id: 'MDQ6VXNlcjQ=', avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4', gravatar_id: '', …}
// 4: {login: 'ezmobius', id: 5, node_id: 'MDQ6VXNlcjU=', avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4', gravatar_id: '', …}
// 5: {login: 'ivey', id: 6, node_id: 'MDQ6VXNlcjY=', avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4', gravatar_id: '', …}
// 6: {login: 'evanphx', id: 7, node_id: 'MDQ6VXNlcjc=', avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4', gravatar_id: '', …}
// 7: {login: 'vanpelt', id: 17, node_id: 'MDQ6VXNlcjE3', avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4', gravatar_id: '', …}
// 8: {login: 'wayneeseguin', id: 18, node_id: 'MDQ6VXNlcjE4', avatar_url: 'https://avatars.githubusercontent.com/u/18?v=4', gravatar_id: '', …}
// 9: {login: 'brynary', id: 19, node_id: 'MDQ6VXNlcjE5', avatar_url: 'https://avatars.githubusercontent.com/u/19?v=4', gravatar_id: '', …}
// 10: {login: 'kevinclark', id: 20, node_id: 'MDQ6VXNlcjIw', avatar_url: 'https://avatars.githubusercontent.com/u/20?v=4', gravatar_id: '', …}
// 11: {login: 'technoweenie', id: 21, node_id: 'MDQ6VXNlcjIx', avatar_url: 'https://avatars.githubusercontent.com/u/21?v=4', gravatar_id: '', …}
// 12: {login: 'macournoyer', id: 22, node_id: 'MDQ6VXNlcjIy', avatar_url: 'https://avatars.githubusercontent.com/u/22?v=4', gravatar_id: '', …}
// 13: {login: 'takeo', id: 23, node_id: 'MDQ6VXNlcjIz', avatar_url: 'https://avatars.githubusercontent.com/u/23?v=4', gravatar_id: '', …}
// 14: {login: 'caged', id: 25, node_id: 'MDQ6VXNlcjI1', avatar_url: 'https://avatars.githubusercontent.com/u/25?v=4', gravatar_id: '', …}
// 15: {login: 'topfunky', id: 26, node_id: 'MDQ6VXNlcjI2', avatar_url: 'https://avatars.githubusercontent.com/u/26?v=4', gravatar_id: '', …}
// 16: {login: 'anotherjesse', id: 27, node_id: 'MDQ6VXNlcjI3', avatar_url: 'https://avatars.githubusercontent.com/u/27?v=4', gravatar_id: '', …}
// 17: {login: 'roland', id: 28, node_id: 'MDQ6VXNlcjI4', avatar_url: 'https://avatars.githubusercontent.com/u/28?v=4', gravatar_id: '', …}
// 18: {login: 'lukas', id: 29, node_id: 'MDQ6VXNlcjI5', avatar_url: 'https://avatars.githubusercontent.com/u/29?v=4', gravatar_id: '', …}
// 19: {login: 'fanvsfan', id: 30, node_id: 'MDQ6VXNlcjMw', avatar_url: 'https://avatars.githubusercontent.com/u/30?v=4', gravatar_id: '', …}
// 20: {login: 'tomtt', id: 31, node_id: 'MDQ6VXNlcjMx', avatar_url: 'https://avatars.githubusercontent.com/u/31?v=4', gravatar_id: '', …}
// 21: {login: 'railsjitsu', id: 32, node_id: 'MDQ6VXNlcjMy', avatar_url: 'https://avatars.githubusercontent.com/u/32?v=4', gravatar_id: '', …}
// 22: {login: 'nitay', id: 34, node_id: 'MDQ6VXNlcjM0', avatar_url: 'https://avatars.githubusercontent.com/u/34?v=4', gravatar_id: '', …}
// 23: {login: 'kevwil', id: 35, node_id: 'MDQ6VXNlcjM1', avatar_url: 'https://avatars.githubusercontent.com/u/35?v=4', gravatar_id: '', …}
// 24: {login: 'KirinDave', id: 36, node_id: 'MDQ6VXNlcjM2', avatar_url: 'https://avatars.githubusercontent.com/u/36?v=4', gravatar_id: '', …}
// 25: {login: 'jamesgolick', id: 37, node_id: 'MDQ6VXNlcjM3', avatar_url: 'https://avatars.githubusercontent.com/u/37?v=4', gravatar_id: '', …}
// 26: {login: 'atmos', id: 38, node_id: 'MDQ6VXNlcjM4', avatar_url: 'https://avatars.githubusercontent.com/u/38?v=4', gravatar_id: '', …}
// 27: {login: 'errfree', id: 44, node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0', avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4', gravatar_id: '', …}
// 28: {login: 'mojodna', id: 45, node_id: 'MDQ6VXNlcjQ1', avatar_url: 'https://avatars.githubusercontent.com/u/45?v=4', gravatar_id: '', …}
// 29: {login: 'bmizerany', id: 46, node_id: 'MDQ6VXNlcjQ2', avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4', gravatar_id: '', …}
// length: 30
// [[Prototype]]: Array(0)