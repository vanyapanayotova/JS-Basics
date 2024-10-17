function ticket(input) {
    let people = Number(input[0]);
    let nigths = Number(input[1]);
    let transportCards = Number(input[2]);
    let ticketsForMuseums = Number(input[3]);

    let totalNigths = nigths * 20;
    let totalTransportCards = transportCards * 1.60;
    let totalTicket = ticketsForMuseums * 6;

    let totalPrice = (totalNigths + totalTransportCards + totalTicket) * people;
    let discount = totalPrice + totalPrice * 0.25;
    console.log(discount.toFixed(2));
}
ticket(["131",
"9",
"33",
"46"])