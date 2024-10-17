function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];
    let work = "";

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':

            if (hours >= 10 && hours <= 18) {
                work = 'open';
            } else {
                work = 'closed';
            }
            break;

        case 'Sunday': 
            work = 'closed'; 
            break;
    } 
    console.log(work);
}
workingHours(["11", "Monday"]);
