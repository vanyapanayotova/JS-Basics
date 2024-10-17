function divisibleBy9(input) {
    let start = Number(input[0]);
    let stop = Number(input[1]);
    let sum = 0;
    let buff = "";

    for (let i = start; i <= stop; i++) {

        if (i % 9 === 0) {
            sum += i;
            buff += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}
divisibleBy9(["100", "200"]);