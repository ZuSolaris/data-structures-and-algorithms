# Challenge Summary

## Merge Sort

In your blog article, visually show the output of processing this input array:
[8,4,23,42,16,15]
For your own understanding, consider also stepping through these inputs:
Reverse-sorted: [20,18,12,8,5,-2]
Few uniques: [5,12,7,5,5,7]
Nearly-sorted: [2,3,5,7,13,11]
Implementation
Provide a visual step through for each of the sample arrays based on the provided pseudo code
Convert the pseudo-code into working code in your language
Present a complete set of working tests


## Whiteboard Process

![CC-27](../images/CC27.PNG)

## Approach & Efficiency

I took the schools approach I don't I feel like I still dont understand and I don't feel like the algoritihim is helpful.

## Solution

function Mergesort (arr);
let n = arr.length;

if n > 1{

     let mid = n/2;
     let left = arr[0];
     let right = arr[n]
}

Mergesort(left);

Mergesort(right);

Merge(left ,right ,arr);

function Merge(left, right, arr);

let i = 0;
let j = 0;
let k = 0;

while(i < left.length && j < right.length){
if left[i] <= right[j]
arr[k] = left[i];
i = i+1;
};

else(arr[k] === right[j]){
j = j+1;
k = k+1;
};

if(i = left.length){
}
