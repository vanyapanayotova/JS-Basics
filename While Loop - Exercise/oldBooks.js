function oldBooks(input) {
    let book = input[0];
    let booksCheched = 0;
    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'No More Books') {
        let bookTitle = command;

        if (bookTitle === book) {
            console.log(`You checked ${booksCheched} books and found it.`);
            break;
        }

        booksCheched++;

        command = input[index];
        index++;
    }
    if (command === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCheched} books.`);
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])