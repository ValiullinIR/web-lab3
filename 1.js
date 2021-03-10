function sum(a) {
    let currentSum = a;

    return function(b) {
        currentSum += b;
        return currentSum;
    }
}
