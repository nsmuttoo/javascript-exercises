const reverseString = function(input) {
output = ''

for(i = 0; i<=input.length; i++){
    
    output = output + input.charAt(input.length-i)
}

return output;
};

// Do not edit below this line
module.exports = reverseString;
