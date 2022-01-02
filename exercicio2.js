var valor=[];
var temp;

 valor[0] = prompt('Digite 1º valor');
 valor[1] = prompt('Digite 2º valor');
 valor[2] = prompt('Digite 3º valor');


for(k=0;k<2;k++){
	for(i=0;i<3;i++){
		if(valor[i] > valor[i+1]){
			temp = valor[i];
        	valor[i]=valor[i+1];
        	valor[i+1] = temp;
        }
	}    
}

for(j=0; j<3;j++){
     document.write(valor[j]+" ");
}