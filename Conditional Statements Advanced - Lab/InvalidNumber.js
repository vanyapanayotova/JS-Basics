function InvalidNumber(input) {
  let number = Number(input[0]);

  if (number !== 0 && (number < 100 || number > 200)) {
     console.log("invalid");
  }
}
InvalidNumber(["-10"])