function cimena(input) {
  let type = (input[0]);
  let r = Number(input[1]);
  let c = Number(input[2]);
  let income = 0;

  if (type == "Premiere") {
    income = c * r * 12;
  }
  else if (type == "Normal") {
    income = c * r * 7.5;
  }
  else if (type == "Discount") {
    income = c * r * 5;
  }
  console.log(`${income.toFixed(2)} leva`);
}

cimena(["Premiere", "10", "12"]);