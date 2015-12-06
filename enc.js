```JS

function mega_cool_encrypt(string){
    //Must make an aeray of all chars of the string
-   var areay=array();
+   var array= [];
    for(var i=0;i<string.length;i++){
-      array_push(array,string.charAt(i));
+      array.push(string.charAt(i));
    }
    //We must have an array which contains the letters //from our string
    var newString="";
-   for(var i=0;i<=array.length;i++){
+   console.log(array);
+   for(var i=0;i<array.length;i++){
       switch(array[i]){
          case '0':
          newString+='z';
          break;
-         /* all the other cases */
+         case '1':
+         newString+='y';
+         break;
+         case '2':
+         newString+='x';
+         break;
+         case '3':
+         newString+='w';
+         break;
+         case '4':
+         newString+='v';
+         break;
+         case '5':
+         newString+='u';
+         break;
+         case '6':
+         newString+='t';
+         break;
+         case '7':
+         newString+='s';
+         break;
+         case '8':
+         newString+='r';
+         break;
+         case '9':
+         newString+='q';
+         break;
+         case 'a':
+         newString+='p';
+         break;
+         case 'b':
+         newString+='o';
+         break;
+         case 'c':
+         newString+='n';
+         break;
+         case 'd':
+         newString+='m';
+         break;
+         case 'e':
+         newString+='l';
+         break;
+         case 'f':
+         newString+='k';
+         break;
+         case 'g':
+         newString+='j';
+         break;
+         case 'h':
+         newString+='i';
+         break;
+         case 'i':
+         newString+='h';
+         break;
+         case 'j':
+         newString+='g';
+         break;
+         case 'k':
+         newString+='f';
+         break;
+         case 'l':
+         newString+='e';
+         break;
+         case 'm':
+         newString+='d';
+         break;
+         case 'n':
+         newString+='c';
+         break;
+         case 'o':
+         newString+='b';
+         break;
+         case 'p':
+         newString+='a';
+         break;
+         case 'q':
+         newString+='9';
+         break;
+         case 'r':
+         newString+='8';
+         break;
+         case 's':
+         newString+='7';
+         break;
+         case 't':
+         newString+='6';
+         break;
+         case 'u':
+         newString+='5';
+         break;
+         case 'v':
+         newString+='4';
+         break;
+         case 'w':
+         newString+='3';
+         break;
+         case 'x':
+         newString+='2';
+         break;
+         case 'y':
+         newString+='1';
+         break;
+         case 'z':
+         newString+='0';
+         break;
+         case ' ':
+         newString+='#';
+         break;
          default:
          newString+=array[i];
          break;
          }
     }
-return newString;
+console.log(newString);
 }
-
-
 function mega_cool_decrypt(string){
    //Must make an aeray of all chars of the string
-   var areay=array();
+   var array= [];
    for(var i=0;i<string.length;i++){
-      array_push(array,string.charAt(i));
+      array.push(string.charAt(i));
    }
    //We must have an array which contains the letters //from our string
    var newString="";
-   for(var i=0;i<=array.length;i++){
+   console.log(array);
+   for(var i=0;i<array.length;i++){
       switch(array[i]){
          case '0':
          newString+='z';
          break;
+         case '1':
+         newString+='y';
+         break;
+         case '2':
+         newString+='x';
+         break;
+         case '3':
+         newString+='w';
+         break;
+         case '4':
+         newString+='v';
+         break;
+         case '5':
+         newString+='u';
+         break;
+         case '6':
+         newString+='t';
+         break;
+         case '7':
+         newString+='s';
+         break;
+         case '8':
+         newString+='r';
+         break;
+         case '9':
+         newString+='q';
+         break;
+         case 'a':
+         newString+='p';
+         break;
+         case 'b':
+         newString+='o';
+         break;
+         case 'c':
+         newString+='n';
+         break;
+         case 'd':
+         newString+='m';
+         break;
+         case 'e':
+         newString+='l';
+         break;
+         case 'f':
+         newString+='k';
+         break;
+         case 'g':
+         newString+='j';
+         break;
+         case 'h':
+         newString+='i';
+         break;
+         case 'i':
+         newString+='h';
+         break;
+         case 'j':
+         newString+='g';
+         break;
+         case 'k':
+         newString+='f';
+         break;
+         case 'l':
+         newString+='e';
+         break;
+         case 'm':
+         newString+='d';
+         break;
+         case 'n':
+         newString+='c';
+         break;
+         case 'o':
+         newString+='b';
+         break;
+         case 'p':
+         newString+='a';
+         break;
+         case 'q':
+         newString+='9';
+         break;
+         case 'r':
+         newString+='8';
+         break;
+         case 's':
+         newString+='7';
+         break;
+         case 't':
+         newString+='6';
+         break;
+         case 'u':
+         newString+='5';
+         break;
+         case 'v':
+         newString+='4';
+         break;
+         case 'w':
+         newString+='3';
+         break;
+         case 'x':
+         newString+='2';
+         break;
+         case 'y':
+         newString+='1';
+         break;
+         case 'z':
+         newString+='0';
+         break;
+         case '#':
+         newString+=' ';
+         break;
          /* all the other cases */
          default:
          newString+=array[i];
          break;
          }
     }
-return newString;
+console.log(newString);
 }
+mega_cool_encrypt("mare bagabont");
mega_cool_decrypt(mega_cool_encrypt("mare bagabont"));
```
