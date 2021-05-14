import {Human} from "./human"
import {palindrome} from "./palindrom"

const add_a = 'bcdfghjklmnpqrstvwxz'

const Oleh = new Human('Oleh', 22.5, 'elephant')

if (add_a.indexOf(Oleh.favorite_pet[0]) != -1) {
        console.log(`My name is ${Oleh.name}.\nI am ${Oleh.age} y.o.\nMy favorite pet is a ${Oleh.favorite_pet}`)
    }

else {
    console.log(`My name is ${Oleh.name}.\nI am ${Oleh.age} y.o.\nMy favorite pet is an ${Oleh.favorite_pet}`)
}

const checking_word = '1234'

if (palindrome(checking_word)) {
    console.log(`слово ${checking_word} — Паліндром`)
}
else (console.log(`слово ${checking_word} — НЕ Паліндром`))