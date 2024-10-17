function multiplyTable(input) {
    let number = input[0];
    let a = Number(number[2]);
    let b = Number(number[1]);
    let c = Number(number[0]);

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let g = 1; g <= c; g++) {
                console.log(`${i} * ${j} * ${g} = ${i*j*g};`);

            }
        }
    }
}
multiplyTable(["222"]);