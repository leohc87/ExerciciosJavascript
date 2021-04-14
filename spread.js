const str = 'Digital innovation one';
const arr = [1, 2, 3, 4];

function LogArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [5, 6, 7, ...arr];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);