function Parametro(string) {
	var palavras = string.trim().split(/\s+/);
	this.nome = palavras[0];
	this.tipo = toPascalCase(palavras[1]);
}

function FuncoesStruct(nome, params) {
	var lNome = toCamelCase(nome);
	this.construtor = '(make-' + lNome + ' ' + declaraParametros(params) + ')';
	this.questao = '(' + lNome + '? ' + lNome[0] + ')';
	this.seletores = makeSeletores(nome, params);
}

function selecionar() {
	this.select();
}

function makeSeletores(nome, params) {
	var seletores = [];
	var lNome = toCamelCase(nome);
        
	for (var i = 0, len = params.length; i < len; i++) {
<<<<<<< HEAD
		seletores.push('(' + nome + '-' + params[i].nome + ' ' + lNome[0] + ')');
=======
		seletores.push('(' + nome + '-' + params[i].nome + ' e)');
>>>>>>> 02d90faee8e7a9bd5bb1c0baa358edec527c158f
	}

	return seletores;
}

function ajustarAltura(textarea) {
	textarea.rows = textarea.value.split(/\r?\n/).length;
}

// Adiciona redimensionamento às textarea de saída
textosSaida = document.getElementsByClassName("txtSaida");
(function () {
	for (var i = 0; i < textosSaida.length; i++) {
		ajustarAltura(textosSaida[i]);
	}
})();

function criarStruct() {
	var nome = document.getElementById("txtStructNome").value;
	var params = gerarParametros(document.getElementById("txtStructParam").value);
	var funcoes = new FuncoesStruct(nome, params);

	var texto = '(define-struct ' + toCamelCase(nome);
	texto += ' (' + declaraParametros(params) + '))\n';
	texto += ';; Elemento do conjunto ' + toPascalCase(nome) + '.\n';
	texto += ';; (make-' + toCamelCase(nome) + ' ' + makeParametros(params) + ')';

	if (params.length > 0) {
		texto += ' onde:\n';
		texto += descreveParams(params);
	}

	var txtSaida = document.getElementById("txtStructSaida");
	txtSaida.value = texto;
	ajustarAltura(txtSaida);

	var divSaida = document.getElementById('metodosStruct');
	divSaida.innerHTML = '';

	divSaida.appendChild(novaTextArea(funcoes.construtor));
	divSaida.appendChild(novaTextArea(funcoes.questao));

	for (var i = 0, len = funcoes.seletores.length; i < len; i++) {
		divSaida.appendChild(novaTextArea(funcoes.seletores[i]));
	}
}

function novaTextArea(string) {
	var novaArea = document.createElement('textarea');
	novaArea.className = 'txtSaida';
	novaArea.rows = 1;
	novaArea.value = string;
	novaArea.addEventListener('click', selecionar);
	return novaArea;
}

function descreveParams(params) {
	var linhas = [];
	for (var i = 0, len = params.length; i < len; i++) {
		linhas.push(';; 1' + params[i].nome + ': ' + params[i].tipo);
	}
	return linhas.join('\n');
}

function gerarParametros(textoParams) {
	var arr = textoParams.split(/,/);
	var saida = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		saida.push(new Parametro(arr[i]));
	}
	return saida;
}

function declaraParametros(parametros) {
	var nomes = [];
	for (var i = 0, len = parametros.length; i < len; i++) {
		nomes.push(parametros[i].nome);
	}
	return nomes.join(" ");
}

function makeParametros(parametros) {
	var nomes = [];
	for (var i = 0, len = parametros.length; i < len; i++) {
		nomes.push(1 + parametros[i].nome);
	}
	return nomes.join(" ");
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
(function () {
	var saidas = document.getElementsByClassName('txtSaida');
	for (var i = 0, len = saidas.length; i < len; i++) {
		saidas[i].addEventListener('click', selecionar);
	}
})();
