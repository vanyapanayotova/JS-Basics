function bday(input) {
    let rent = Number(input);

    let cake = rent * 0.2;
    let drink = cake * 0.55;
    let animator = rent / 3;
    let sum = rent + cake + drink + animator;

    console.log(sum);
}
bday([3720]);