

const calculator = (num1, oparator, num2) => {

    if (oparator == "+") return num1 + num2;
    if (oparator == "-") return num1 - num2;
    if (oparator == "*") return num1 * num2;
    if (oparator == "/") return num1 / num2;
}
const result = calculator(10, "+", 20)
console.log(result)