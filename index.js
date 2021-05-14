"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var human_1 = require("./human");
var palindrom_1 = require("./palindrom");
var add_a = 'bcdfghjklmnpqrstvwxz';
var Oleh = new human_1.Human('Oleh', 22.5, 'elephant');
if (add_a.indexOf(Oleh.favorite_pet[0]) != -1) {
    console.log("My name is " + Oleh.name + ".\nI am " + Oleh.age + " y.o.\nMy favorite pet is a " + Oleh.favorite_pet);
}
else {
    console.log("My name is " + Oleh.name + ".\nI am " + Oleh.age + " y.o.\nMy favorite pet is an " + Oleh.favorite_pet);
}
var checking_word = '1234';
if (palindrom_1.palindrome(checking_word)) {
    console.log("\u0441\u043B\u043E\u0432\u043E " + checking_word + " \u2014 \u041F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C");
}
else
    (console.log("\u0441\u043B\u043E\u0432\u043E " + checking_word + " \u2014 \u041D\u0415 \u041F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C"));
