

const sumOfPositiveNumber = (Number) => {
    let sumOfNumber = 0;
    for (let i = 0; i < Number.length; i++) {
        if (Number[i] > 0) {
            sumOfNumber = sumOfNumber + Number[i]
        }
    }
    return sumOfNumber;
}

const sum = sumOfPositiveNumber([-5, -3])
console.log('Sum Of Positive Number is', sum)