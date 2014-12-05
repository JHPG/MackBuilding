/*	
*	-----	How to use 	-----
*
*	Importar no head esse arquivo e os arquivos com as variáveis (módulos)
*		- Na order:
			- JQuery, prototype(esse), módulos e X3DOM

*	Para importar os aquivos com as variáveis:
*		<script type="text/javascript" src="arquivo"></script>
*
*	Para adicionar elementos (variáveis), usar sintaxe Javascript: 
*	- Quebra de linha:
*		Ex: var parede = "\n\
*			texto texto texto texto texto \n\
*		";
*
*		'\n\' tem a função de exibir a quebra de linha e não dar erro na quebra da string
*
*	Obs: Não pode haver quebra de linha sem "\"
*
*	Autor: JHPG
*/


window.onload = function() {		// OU addPrototypes()

	var x = document.getElementsByTagName("prototype");

	for(var el in x){
		var tipo = x[el].getAttribute("use");	//pega a variável a ser lida pelo "use"

		if(tipo != null){
			var html = "\n"+ eval(tipo) +"\n";	//a variável a ser usada foi passada pelo "use" do elemento usando o eval() que retornará o nome da variável
			
			$(html).insertAfter( x[el] );	//insere dps do nó
			x[el].parentNode.removeChild(x[el]);		//apaga o nó
		}else{
			x[el].innerHTML += "Prototype sem referencia";
		}
	}
}