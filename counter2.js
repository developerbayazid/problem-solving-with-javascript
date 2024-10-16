/**
 * Write a function createCounter. It should accept an initial integer init.
 * It should return a object with three functions.
 *
 * The Three functions are:
 *
 * 1.increment(): increase the current value by 1 and returns it.
 * 2.decrement(): reduce the current value by 1 and returns it.
 * 3.reset(): set the current value to init and then returns it.
 */

function createCounter(init) {
    let count = init;

    const increment = () => ++count;
    const decrement = () => --count;
    const reset = () => {
        count = init;
        return count;
    };

    return {
        increment,
        decrement,
        reset,
    };
}

let counter = createCounter(10);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
