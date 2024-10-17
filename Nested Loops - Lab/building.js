function building(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    for (let floor = a; floor > 0; floor--) {
        let buff = "";
        for (let room = 0; room < b; room++) {

            if (floor === a) {
                buff += `L${floor}${room} `
            } else if (floor % 2 === 0) {
                buff += `O${floor}${room} `
            } else {
                buff += `A${floor}${room} `
            }
        }
        console.log(buff);
    }
}
building(["9", "5"]);