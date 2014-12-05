/*	
*	-------- 	How to use 		--------
*
*	- Importar no head esse arquivo e os arquivos com as funções (módulos)
*		- Na order:
*			- JQuery, módulos, prototype_x3dom(esse) e x3dom.js
*
*	- Para importar os aquivos com as variáveis:
*		<script type="text/javascript" src="arquivo"></script>
*
*	- Para adicionar elementos (variáveis), usar sintaxe Javascript: 
*		Quebra de linha:
*		Ex: function mesa(attributes){	//nome do Prototype
*				return "\n\
*					texto texto texto texto texto";
*			} //'\n\' tem a função de exibir a quebra de linha e não dar erro na quebra da strings
*
*	- Para adicionar elementos, adicione como funções retornando uma string, Ex: "function mesa(attributes)";
*	- Para criar os atributos adicione no elemento xml e para acessar leia o atributo da variável, Ex: "attributes.color";
*
*	Obs: Não pode haver quebra de linha sem "\"; usar variáveis minúsculas(ficarão assim quando as tags forem lidas);
*
*	Autor: JHPG.
*/

window.onload = function(){ addPrototypes(); };

function addPrototypes() {

	x = new Array(); 
	x = document.getElementsByTagName("prototype");

	while(x.length != 0){

		for(var i in x){
		//Variáveis

			/* //Para ler as tag dentro
			var y = x[i].getElementsByTagName("fieldValue");
			var attrObj2 = '{ ';				//Cria o Obj
			for(var j in y){
				var objName = y[j].getAttribute("name");			//Lê as tags
				var objValue = y[j].getAttribute("value");

				attrObj2 += '"' + objName + '": "' + objValue + '", ';
				//alert( attrObj2 );
			}
			attrObj2 += ' "":"" } ';
			alert( attrObj2 );*/

		//---------------
			var attribs2 = x[i].attributes;	//Lê todos atributos do elemento

			var attrObj = '';
			for(var att in attribs2){
				attrObj += " '" + attribs2[att].name + "':'" + attribs2[att].value + "', ";
			}
			attrObj += " 'a':'a' ";
		//-------(JSON) - Exemplo do que é montado aqui: '{ "color": "0 0 0", "texture": " " }'
			
			//Atributos mandados como objeto (attrObj)

		//Adicionar o elemento 
			
			var use = null;
			use = x[i].getAttribute("use");	//pega a variável a ser lida pelo "use"

			if(use != null){
				var html = "<Group DEF='"+use+"'>"+
					eval(use+"({"+attrObj+"})") + 
					"</Group>";	//a variável a ser usada foi passada pelo "use" do elemento usando o eval() que retornará o nome da variável
				
				$(html).insertAfter( x[i] );	//insere dps do nó
				x[i].parentNode.removeChild(x[i]);		//apaga o nó
			}else{
				x[i].innerHTML += "Prototype sem referencia";
			}
		}
		x = document.getElementsByTagName("prototype");


		//Para remover textura, caso haja cor
		var y = new Array(); 
		y = document.getElementsByTagName("ImageTexture");

		for(var i in y){
			if (y[i].getAttribute("url") == ""){

				y[i].parentNode.removeChild(y[i]);
			}
		}

	}
}