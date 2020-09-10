const supervillains = require('supervillains')

let villain = supervillains.random()

let firstLetter = villain.charCodeAt(0)

    const villainSentence = () => {

        if (firstLetter >= 65 && firstLetter < 76) {
            console.log(`${villain}'s first name begins with the letters A-K.`)
        }
        else if (firstLetter >= 76 && firstLetter < 83) {
            console.log(`${villain}'s first name begins with the letters L-R.`)
        }
        else if (firstLetter >= 83 && firstLetter <= 90) {
            console.log(`${villain}'s first name begins with the letters S-Z.`)
        }
        else {
            console.log('Something\'s not quite right here!')
        }
    }

villainSentence()