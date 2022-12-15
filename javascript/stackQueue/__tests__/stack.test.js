'use strict';


const Stack = require('../stack');

describe('Stack', () => {
  it('successfully push onto a stack', () => {
    //assertion for 1st test
    const stack = new Stack();
    //Use data made from methods
    stack.push(1);
    //expect value to be 1 or inputted variable
    expect(stack.top.value).toEqual(1);
    //expects a value to be Null
    expect(stack.top.next).toBeNull();
  });
  it('can successfully push multiple values onto a stack', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    //to go to 1 because to the bottom thats why there is two nexts
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('can successfully pop off the stack', () => {
    const stack = new Stack();
//push in the new values to make a stack
    stack.push(1);
    stack.push(2);
    stack.push(3);

//make sure the stack works
    expect(stack.top.value).toEqual(3);
//pop the stack to make sure that it is working
    stack.pop();
    expect(stack.top.value).toEqual(2);
  });
  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    stack.pop();
    expect(stack.top.value).toEqual(2);
    stack.pop();
    expect(stack.top.value).toEqual(1);
    stack.pop();
    expect(stack.top).toBeNull;
  });

});


