function areaOfFigures(input) {

    let figur = input[0];

    if (figur === "square") {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (figur === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (figur === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r, 2);
        console.log(area.toFixed(3));
    } else if (figur === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = (a * h) / 2;
        console.log(area.toFixed(3));
    }

}



areaOfFigures(["circle",
    "6"]);