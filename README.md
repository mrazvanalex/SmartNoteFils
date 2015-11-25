# SmartNote
ToDo List Project

Team : 1232 FILS

Dragu Andreea

Barbu Bianca

Merdescu Razvan

Ionita Vlad

function mega_cool_encrypt(string){
//Must make an aeray of all chars of the string
var areay=array();
for(var i=O;i<string.length;i++){
array_push(array,string.charAt(i));
}
//We must have an array which contains the letters from our string
var newString="";
for(var i=0;i<=array.length;i++){
switch(array[i]){
case '0':
newString+='z';
break;
/* all the other cases */
default:
newString+=array[i];
break;
}
}
return newString