function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height
    let qtyBoxes = 0;

    for (let i = 3; i < input.length; i++) {
        if (input[i] === "Done") {
            break;
        } else {
            qtyBoxes += Number(input[i]);
        }
    }
    if (qtyBoxes < volume ) {
        console.log(`${volume - qtyBoxes} Cubic meters left.`);
    }else {
        console.log(`No more free space! You need ${qtyBoxes - volume} Cubic meters more.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])