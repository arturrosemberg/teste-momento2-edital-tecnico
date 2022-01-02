var valor;
var temp;

 valor = prompt('Digite 1º valor');
 if(valor>= 0 && valor%2 ==1){
 	document.write("o numero digitado e Ímpar");
 }else if(valor >= 0 && valor%2 == 0){
 	document.write("o numero digitado e Par");
 }else if(valor < 0 && valor%2 == 0){
 	document.write("o numero digitado e Par negativo");
 }else{
 	document.write("o numero digitado e Ímpar negativo"); 
 }
