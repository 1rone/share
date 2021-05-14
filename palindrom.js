"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
function palindrome(word) {
    var i;
    if (word.length <= 0) {
        return true;
    }
    for (i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - i + 1]) {
            return false;
        }
    }
    return true;
}
exports.palindrome = palindrome;
