const fibonacci = function(num) {
if(num<0){
    return "OOPS"
}

    sequence = [0,1,1]
for (i =3; i<=num; i++){
    sequence[i] = sequence[i-1] + sequence[i-2]
    console.log(sequence[i])
}
return sequence[num]
};

// Do not edit below this line
module.exports = fibonacci;
