

const mostFrequentNumber = (numbers) => {
    let repetedNumber = 0;
    let countOfMostFrequentNumber = 1;
    let mostFrequentNumber;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                repetedNumber++;
            }
            if (repetedNumber > countOfMostFrequentNumber) {
                countOfMostFrequentNumber = repetedNumber;
                mostFrequentNumber = numbers[i]
            }
        }
        repetedNumber = 0;
    }
    return mostFrequentNumber;
}

const result = mostFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5])
console.log('Most Frequent Number is', result)
