function superCounter(lolz){
var words = lolz.split(" ").length;
var chars = lolz.length;
var spaces = chars-words+1;
var avglength = (chars-spaces)/words;
var counterObject = new Object();
counterObject.words= words;
counterObject.chars= chars;
counterObject.avglength= avglength;
counterObject.spaces= spaces;
console.log(counterObject);
}
