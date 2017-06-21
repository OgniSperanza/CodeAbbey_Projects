//Since starting could be hard sometimes, let us try the simplest problem possible. The goal is to have practice on submitting answers etc.
//
//We need to sum two numbers and tell the result. Though you can do it manually, try to write a simple program in any language you know, or like, or want to learn.
//
//This screencast video demonstrates steps described further.
//
//How to submit solution
//If you are logged in, you will see the following fields below:
//
//Test data contains "input data" or "test-case" - two numbers which we want to sum.
//Your answer - is where you put your result after processing test data.
//Your solution - is where you save your program code. It would not be checked (at least automatically), but it will help you reuse your code in the next tasks. You can revisit the task any time to see your submitted solution.
//Example:
//
//input data:
//3 5
//
//answer:
//8

var inputs = input().replace(/\n/gm," ");
var inputs = input().replace(/\r/gm," ");
var nums = inputs.split(' ');
var i;
var result = 0;
for (i = 0; i < nums.length; i++) {
    result = Number(result) + Number(nums[i]);
}
output(result);
