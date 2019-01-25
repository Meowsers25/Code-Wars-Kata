// let names = ['Luna', 'B', 'Sully', 'Katie', 'Chris']

// names.forEach(function(name){
//   console.log(name)
// })

// function inOrder(word){
//   if(typeof word != 'string' || word == ''){
//     return 'Not a fucking string'
//   } else {
//     return word.split('').sort().join('')
//   }
// }
// console.log(inOrder('hwk5fwvj'))

// function calculateTip(total){
//   let tipPercent = 0.15
//   return total * tipPercent
// }
// let billTotal = 10.00
// let billTip = calculateTip(billTotal)
// let receipt = 'Total: ' + billTotal + 'Tip: ' + billTip
// document.write(receipt)

// function palindrome(word){
//   let revisedWord = word.toLowerCase()
//   let newWord = revisedWord.split('').reverse().join('')
//   if(newWord === revisedWord){
//     return `${word} is a Palindrome!`
//   } else {
//     return `${word} is not a Palindrome.`
//   }
// }
// console.log(palindrome('AbbA'))

// function code(word){
//   let arr = word.split('')
//   for(let i = 0; i < arr.length; i++){
//     console.log(i)
//   }
// }

let langs = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}
// for(lang in langs){
//   console.log(lang)
// }
function greet(language) {
  for(lang in langs){
    if(language === langs[lang]){
      // console.log(langs[lang])
      return langs[lang]
    } else {
      return 'Welcome'
    }
  }
}
console.log(greet('irish'))