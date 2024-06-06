'use strict';

console.log('hi!');

class MyMath{
    static sum = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static del = (a, b) => a / b;
    static mult = (a, b) => a * b;
}
function Component(content) {
    this.content = content;
}

const result = MyMath.sum(5,7);
console.log('result= ', result);

const component = new Component('new info!');
console.log(component.content);

//require:
//1. resolving ->2.loading 3->wrapping -> 4.evolution -> 5.cashing