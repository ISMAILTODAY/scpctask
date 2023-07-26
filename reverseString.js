

const reverseString = (targetString) => {
    const string = targetString.split('')
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string[i]
    }

    return result
}

const finalResult = reverseString("Hello world");
console.log("Your Reverse String", finalResult)
