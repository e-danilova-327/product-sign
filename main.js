const numOne = '';
const numTwo = '';
const numThree = '';

const productSign = (numOne, numTwo, numThree) => {
    const numProduct = numOne * numTwo * numThree;
    if (numProduct >= 0) {
        console.log('The sign is +');
    } else {
        console.log('The sign is -');
    }
}

console.log(productSign(-10, 2, -4));