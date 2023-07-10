const Cube = require('cubejs');
 
const cube = new Cube();
const n = 100000000;
const T = new Array(6);
for (var min=0; min<6; min++) {
    T[min] = new Array(6);
    for (var max=0; max<6; max++) {
        T[min][max] = 0;
    }
}
for (let i=0; i<n; i++) {
    cube.randomize();
    const str = cube.asString();
    let min = 6;
    let max = 1;
    for (let f=0; f<6; f++) {
        const s = new Set();
        for (let c=0; c<9; c++) {
            s.add(str[f*9+c]);
        }
        min = Math.min(min, s.size);
        max = Math.max(max, s.size);
    }
    T[min-1][max-1]++;
}
for (let min=0; min<6; min++) {
    console.log(T[min]);
}
