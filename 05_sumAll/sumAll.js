const sumAll = function(numb1, numb2) {
low = 0
high = 0
count = 0
if(Number.isInteger(numb1) && Number.isInteger(numb2) && numb1>=0 && numb2 >=0){

}else{
    return 'ERROR'
}

    if(numb1 > numb2){
    low = numb2
    high = numb1
}else{
    low = numb1
    high = numb2
}
for(i = low; i<=high; i++ ){
    count = count +i
}
return count
};

// Do not edit below this line
module.exports = sumAll;
