/**
 * Given an integer n, return a counter function. This counter function initially returns n
 * and than returns 1 more than the previous value every subsequent time it is called (n, n+1, n+2, etc..).
 */

//method 1
const createCounter = (n) => {
    return function () {
        return n++;
    };
};

//method2
class Counter {
    constructor(n) {
        this.n = n;
    }

    increament() {
        return this.n++;
    }
}

const counter = createCounter(3);
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7

const count = new Counter(3);
console.log(count.increament()); // 3
console.log(count.increament()); // 4
console.log(count.increament()); // 5
console.log(count.increament()); // 6
console.log(count.increament()); // 7
