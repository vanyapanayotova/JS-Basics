function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evanPosition = 0;
        let oddPosition = 0;

        let curNumStr = curNum.toString();

        for (let i = 0; i < curNumStr.length; i++) {
            let digit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                evanPosition += digit;
            } else {
                oddPosition += digit;
            }
        }
        if (evanPosition === oddPosition) {
            result += curNum + " ";
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(["100000", "100050"]);