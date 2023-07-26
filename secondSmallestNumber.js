

const secondSmallestNumber = (Numbers) => {
    const sortedNumners = Numbers.sort((a, b) => a - b);
    return sortedNumners[1];
}

const result = secondSmallestNumber([10, 15, 6, 4, 1, 20]);
console.log(result); 