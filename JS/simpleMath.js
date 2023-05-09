//
//
//
//
//
//!Generally, if exporting more than one function, no DEFAULT is required
//At the bottom of the doc, we simply export functions as normal

const addFive = (x) => {
    return `Addition: ${x} + 5 = ${x+5}`;
};

const subtractFive = (x) => {
    return `Subtraction: ${x} - 5 = ${x-5}`;
};

const multiplyFive = (x) => {
    return `Multiplication: ${x} x 5 = ${x*5}`;
};

const noArgs = () => {
    return "Function with no args"
}


export {addFive, subtractFive, multiplyFive, noArgs}