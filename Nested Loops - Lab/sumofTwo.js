function sumOf(input) {
    let start = Number(input[0]);
    let stop = Number(input[1]);
    let comb = 0;
    let magicNum = Number(input[2]);

    for (let a = start; a <= stop; a++) {
        for (let b = start; b <= stop; b++) {
            comb++;
            if (a + b === magicNum) {
                console.log(`Combination N:${comb} (${a} + ${b} = ${magicNum})`);
                return;
            }
        }
    }
    console.log(`${comb} combinations - neither equals ${magicNum}`);
}

sumOf(["23",
    "24",
    "20"])

