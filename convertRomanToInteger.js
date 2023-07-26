
const convertRomanToInteger = (roman) => {
    const romanNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let integer = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentNumber = romanNumber[roman[i]];
        const nextNumber = romanNumber[roman[i + 1]];
        if (nextNumber > currentNumber) {
            integer += nextNumber - currentNumber;
            i++;
        }
        else integer += currentNumber;
    }
    return integer;
}

const result = convertRomanToInteger("IX")
console.log(result)