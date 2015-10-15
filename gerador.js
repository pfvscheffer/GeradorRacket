var teste = '';

function ajustarAltura(textarea) {
	textarea.rows = textarea.value.split(/\r?\n/).length;
}

// Adiciona redimensionamento às textarea de saída
textosSaida = document.getElementsByClassName("txtSaida");
(function () {
	for (var i = 0; i < textosSaida.length; i++) {
		ajustarAltura(textosSaida[i]);
		/* textosSaida[i].addEventListener("input", function() {
			this.rows = this.value.split(/\r?\n/);
		}); */
	}
})();

function criarStruct() {
	var nome = document.getElementById("txtStructNome").value;
	var params = document.getElementById("txtStructParam").value.split(/,/);
	var texto = '(define-struct ' + toCamelCase(nome);
	texto += ' (' + declaraParametros(params) + ')';
	
	document.getElementById("txtStructSaida").value = texto;
}

function declaraParametros(string) {

}

function nomesParametros(arrayParametros) {
	var nomes = [];

	for (var i = 0; i < parametros.length; i++) {
		var parametro = arrayParametros[i].trim().split(/\s+/)[0];
		nomes.push(parametro);
	}

	return nomes.join(" ");
}

function toCamelCase(string) {
	return string[0].toLowerCase() + string.substring(1);
}
	
function toPascalCase(string) {
	return string[0].toUpperCase() + string.substring(1);
}

document.getElementById("btnStruct").addEventListener("click", criarStruct);
