'use strict'
// prueba var
var num=50;
alert(num);
if (true) {
 num=60
 alert(num)

    
}
alert(num)

//prueba let solo afecta codigo de bloque local
var num2=80;
 if (true) {
  let num2=67;
  alert(num2)   
 }
 alert(num2);