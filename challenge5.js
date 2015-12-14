
function swapCase(str){
  var str2 = [];
  for(i=0;i<str.length;i++){
 If str[i]===str[i].toUpperCase(){
  str2[i]= str[i].toLowerCase();
}
else {
  str2[i]= str[i].toUpperCase();
}
}
return str2;
}
