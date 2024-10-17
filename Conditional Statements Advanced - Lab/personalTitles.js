function personalTitles(input) {
    let ages = Number(input[0]);
    let gender = input[1];

    if (gender === 'm') {
        if (ages >= 16) {
            console.log('Mr.');
        } if (ages < 16) {
            console.log('Master');
        }
    }

    if (gender === 'f') {
        if (ages >= 16) {
            console.log('Ms.');
        } if (ages < 16) {
            console.log('Miss');
        }
    }
}
personalTitles(["12", "m"])