	var valor=[100,10000,400,300];
	var temp;

	for(k=0;k<2;k++){
		for(i=0;i<4;i++){
			if(valor[i] < valor[i+1]){
				temp = valor[i];
	        	valor[i]=valor[i+1];
	        	valor[i+1] = temp;
	        }
		}    
	}

	for(j=0; j<4;j++){
	     document.write(valor[j]+" ");
	}