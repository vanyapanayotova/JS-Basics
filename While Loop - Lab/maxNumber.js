function maxNumber(input) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = (input[i]);
        currentNumber = Number(input[i]);
        if (currentNumber > max && currentNumber !== "Stop") {
            max = currentNumber;
        }
    }
    console.log(max);
}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);