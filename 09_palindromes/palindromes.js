const palindromes = function (word) {
let reversed = word.split("").reverse().join("")



word = word.toLowerCase()
reversed = reversed.toLowerCase()
word = word.replace("!","")
word =word.replace(/\s+/g, '')
word =word.replace(".","")
word =word.replace(/,/g, '')
reversed =reversed.replace("!","")
reversed =reversed.replace(/\s+/g, '')
reversed =reversed.replace(".","")
reversed =reversed.replace(/,/g, '')
console.log(reversed)
console.log(word)
if(word == reversed){
return true
}
return false
};

// Do not edit below this line
module.exports = palindromes;
