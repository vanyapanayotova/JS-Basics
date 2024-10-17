function cinema(input) {
    let index = 0;

    let movieName = input[index];
    index++

    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidTicketsCount = 0;

    while (movieName !== "Finish") {
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let spacesTaken = 0;

        while (ticketType !== 'End') {
            spacesTaken++;

            if (ticketType === "student") {
                studentTicketsCount++;
            } else if (ticketType === "standard") {
                standardTicketsCount++;
            } else {
                kidTicketsCount++;
            }

            if (spacesTaken === freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;
        }

        let spacesTakenPerd = (spacesTaken / freeSpace) * 100;
        console.log(`${movieName} - ${spacesTakenPerd.toFixed(2)}% full.`);


        movieName = input[index];
        index++;
    }
    let total = (standardTicketsCount+studentTicketsCount+kidTicketsCount);
    console.log(`Total tickets: ${total}`);
    console.log(`${((studentTicketsCount/total)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicketsCount/total)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicketsCount/total)*100).toFixed(2)}% kids tickets.`);
}

cinema(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])