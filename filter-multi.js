// create a new Array that only takes original Srings
// from multiple nested Arrays

let multi = [
    ['a', 'b', 'c', 'a'],
    ['a', 'b', 'c', 'a']
];

let filteredMulti;
multi.map(inner => {
    filteredMulti = [];

    inner.map((a, b) => {
        if (inner.indexOf(a) === b && a !== b) {
            filteredMulti.push(a)
        }
    });
});

console.log(filteredMulti);
