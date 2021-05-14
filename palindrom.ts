export function palindrome (word:string) {
    let i:number

    if (word.length <= 0) {
        return true
    }

    for (i=0; i<word.length; i++) {
        if (word[i] != word[word.length-i+1]) {
            return false
        }
    }

    return true
}