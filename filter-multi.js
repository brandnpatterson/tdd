// create a new Array that only takes original Srings
// from multiple nested Arrays

let multi = [
    ['a', 'b', 'c', 'a'],
    ['a', 'b', 'c', 'a', 'b']
];

let filteredMulti;
multi.map(inner => {
    filteredMulti = [];

    inner.map((a, b) => {
        if (inner.indexOf(a) === b) {
            if (a !== b) {
                filteredMulti.push(a);
            }
        }
    });
});

console.log(filteredMulti);
