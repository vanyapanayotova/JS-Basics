function examPreparation(input) {
  let maxBadGrades = Number(input[0]);
  let lowGrades = 0;
  let sumGrades = 0;
  let index = 1;
  let problemName = "";
  let countTasks = 0;

  while (input[index] !== "Enough") {
    problemName = input[index];
    index++;
    countTasks++;
    let grade = Number(input[index]);

    if (grade <= 4) {
      lowGrades++;
      if (lowGrades >= maxBadGrades) {
        console.log(`You need a break, ${lowGrades} poor grades.`);
        return;
      }
    }

    sumGrades += grade;
    index++;
  }

  console.log(`Average score: ${(sumGrades / countTasks).toFixed(2)} `);
  console.log(`Number of problems: ${countTasks} `);
  console.log(`Last problem: ${problemName} `);

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])