function minNumber(input) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = (input[i]);
        currentNumber = Number(input[i]);
        if (currentNumber < min && currentNumber !== "Stop") {
            min = currentNumber;
        }
    }
    console.log(min);
}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])