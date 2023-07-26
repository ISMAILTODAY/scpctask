

const sumTwoNumber = (Numbers, target) => {
    const sortedNumners = Numbers.sort((a, b) => a - b);
    // console.log(sortedNumners)
    for (i = 0; i < sortedNumners.length; i++) {
        for (j = i; j < sortedNumners.length; j++) {
            if (sortedNumners[i] + sortedNumners[j] === target) {
                return [i, j]
            }
        }
    }

}

const result = sumTwoNumber([1, 3, 6, 8, 11, 15], 7);
console.log(result)