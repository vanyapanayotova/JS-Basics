function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = (numberOfPages / pages);
    let hoursPerDay = (totalTime / days);
    console.log (hoursPerDay);
}

vacationBooksList (["432 ",
"15 ",
"4 "]);