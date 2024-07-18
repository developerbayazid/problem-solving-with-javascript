//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => {
    return (helloWorld = (...args) => {
        return 'Hello World';
    });
};

const result = createHelloWorld();
console.log(result());
