const removeFromArray = function(input, remover1, remover2, remover3, remover4)  {
output = []
count = 0;

    for(i = 0; i < input.length; i++){
       
        if(input[i] !== remover1 && input[i] !== remover2 && input[i] !== remover3 && input[i] !== remover4){
            output[count] = input[i]
            count++
        }


}
return output
};

// Do not edit below this line
module.exports = removeFromArray;
