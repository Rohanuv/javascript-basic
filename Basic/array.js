const heros = ["Ram", "Raavan", "Haunman", "Sita"]

const Dc = ["Superman", "SpiderMan", "Batman"]

// heros.push(Dc)
// console.log(heros);

const allhero = heros.concat(Dc)

 console.log(allhero);

const all_new_heros = [...heros, ...Dc]

console.log(allhero);