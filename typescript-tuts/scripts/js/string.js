"use strict";
String.prototype.prefix = function (pre) {
    console.log(pre + this);
    return pre + this;
};
String.prototype.newPop = function () {
    let newString = [...this];
    newString.pop();
    let stringAgain = '';
    for (let i = 0; i < newString.length; i++) {
        stringAgain += newString[i];
    }
    return stringAgain;
    // newString[newString.length] = null;
    // return `${stringAgain}`;
};
