// create a new Array that only takes original Srings
let single = ['a', 'b', 'c', 'a'];
let filteredSingle = [];

single.map((a, b) => {
    if (single.indexOf(a) === b) {
        filteredSingle.push(a)
    }
});

console.log(filteredSingle);
