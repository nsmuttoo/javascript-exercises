const getTheTitles = function(input) {



const output = input.map(getTitle)
return output
};

function getTitle(book){
return book.title
}

// Do not edit below this line
module.exports = getTheTitles;
