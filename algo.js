const Cube = require('cubejs');

const moves = [
    "R", "R2", "R'",
    "L", "L2", "L'",
    "U", "U2", "U'",
    "D", "D2", "D'",
    "F", "F2", "F'",
    "B", "B2", "B'",
]
const cube = new Cube();

function find(cn) {
    const f = (max_depth, d, move) => {
        if (d==max_depth) {
            const cube = new Cube();
            cube.move(move);
            const str = cube.asString();
            let ok = true;
            for (let f=0; f<6; f++) {
                const s = new Set();
                for (let c=0; c<9; c++) {
                    s.add(str[f*9+c]);
                }
                if (s.size!=cn) {
                    ok = false;
                }
            }
            if (ok) {
                return move;
            } else {
                return false;
            }
        }
        for (const m of moves) {
            const res = f(max_depth, d+1, move+" "+m);
            if (res!==false) {
                return res;
            }
        }
        return false;
    }
    for (let d=0; ; d++) {
        const res = f(d, 0, "");
        if (res!==false) {
            return res;
        }
    }    
}

for (let cn=1; cn<=6; cn++) {
    console.log(cn, find(cn));
}
