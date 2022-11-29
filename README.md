# Data Structures and Algorithms

See [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges), in the Code 301 Setup Guide.

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `javascript` folder, at the top level, is a sub-folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

If you have not already done so, run `npm install` from within this folder to setup your system to be able to run tests using `Jest`

To run your tests

- Change to the `javascript` folder
- run `npm test` to run all of the tests
- run `npm test ##` to only run tests for challenge ## (i.e. 01)

### 401 Data Structures, Code Challenges

# Reverse an Array

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.


## Whiteboard Process

![Whiteboard](./images/reverseArray.PNG)

## Approach & Efficiency

This code challenge was solved using a while loop and assigning temporary values, while subtracting and adding to these temporary variables assigned to the the ends to essentially 'flip' the front and back of the array.

   So essentially the approach that I applied was deconstructing the code challenge and using core logic itself. I knew that I couldn't use any built in methods so that limited me back to the basics!

   The Big O: space is O(1)
   while the time is O(n)

   ****I followed along in class and disected the problem to ultimately solve this code challenge.** **


