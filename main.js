const productSign = (numOne, numTwo, numThree) => {
    let numProduct = numOne * numTwo * numThree;
    if (numProduct >= 0) {
        return 'The sign is +';
    } else {
        return 'The sign is -';
    }
}

console.log(productSign(-10, -2, -4));