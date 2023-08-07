const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = [];

for (const q of QUERY) {
    const count = INPUT.filter(item => item === q).length
    OUTPUT.push(count);
}

console.log(OUTPUT);

