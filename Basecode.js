//Javascript Variable Exercise

var //bucket
  bk_A = "3",
  bk_B = "8",
  bk_C;

//move "3" to bk_B and "8" to bk_A
bk_C = bk_A;
bk_A = bk_B;
bk_B = bk_C;

function lifeInWeeks(age) {
        var day = (90 - age) * 365;
        var week = (90 - age) * 52;
        var month = (90 - age) * 12;
        console.log(
            "You have " +
            day +
            " days, " +
            week +
            " weeks, and " +
            month +
            " months left."
        );
}
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/
function bmiCalculator(weight, height) {
        var result = Math.floor(weight / (height * height));
        return result;
}
var names=["Phong", "Phat", "Thuy", "Thoi"];
function whosPaying(names) {

        var getRD= Math.floor(Math.random() * names.length);
        return names[getRD] + " is going to buy lunch today!"
    }

function fibonacciGenerator(n) {
        var fibo = [];
        if (n === 1) {
            fibo = [0];
            return fibo;
        } else if (n === 2) {
            fibo = [0, 1];
            return fibo;
        } else {
            fibo = [0, 1];
            for (var i = 2; i < n; i++) {
            var next = fibo[fibo.length - 2] + fibo[fibo.length - 1];
            fibo.push(next);
            }
        return fibo;
        }
}
