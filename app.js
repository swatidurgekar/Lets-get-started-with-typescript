"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const result1 = add(num1, num2);
    textResults.push(result1);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("It worked");
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split("w"));
});
