function balls(input) {
    let n = Number(input[0]);
    let totalPoint = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let otherColors = 0;

    for (let i = 1; i <= n; i++) {

        if (input[i] === "red") {
            red++;
            totalPoint += 5;
        } else if (input[i] === "orange") {
            orange++;
            totalPoint += 10;
        } else if (input[i] === "yellow") {
            yellow++;
            totalPoint += 15;
        } else if (input[i] === "white") {
            white++;
            totalPoint += 20;
        } else if (input[i] === "black") {
            black++;
            totalPoint = Math.floor(totalPoint/2);
        } else {
            otherColors++;
        }
    }

    console.log(`Total points: ${totalPoint}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${black}`);

}
balls([5, "red", "red", "ddd", "ddd", "ddd"]);
//([3, "white", "black", "pink"]);

//([5,"red", "red", "ddd", "ddd", "ddd"]);