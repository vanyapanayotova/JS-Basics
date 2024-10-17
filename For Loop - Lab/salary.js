function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= n + 2; i++) {
        let tab = input[i];
        if (tab === "Facebook") {
            salary -= 150;
        } else if (tab === "Instagram") {
            salary -= 100;
        } else if (tab === "Reddit") {
            salary -= 50;
        } else {
            salary = salary;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    } else {
        console.log(salary);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])