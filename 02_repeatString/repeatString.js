const repeatString = function(phrase, count) {
combinedPhrase = ""
if(count<0){
    return 'ERROR'
}
for( i =0; i<count; i++ ){
    combinedPhrase = combinedPhrase+phrase
}
console.log(combinedPhrase)
return combinedPhrase
};

// Do not edit below this line
module.exports = repeatString;
