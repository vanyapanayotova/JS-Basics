function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degress = radians * 180 / Math.PI;

    console.log(degress);
}
radiansToDegrees(["3.1416"]);