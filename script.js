console.log("seja bem vindo!")

var alfabeto = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z"]

function Sortear() {
	if (alfabeto.length > 0) {
		numeroSorteado = Math.floor(Math.random() * (alfabeto.length - 1))
	 	console.log("sorteado:",numeroSorteado, alfabeto.at(numeroSorteado))
	 	
	 	elementoSorteadoHTML = alfabeto.at(numeroSorteado)
	 	console.log(elementoSorteadoHTML)

	 	trocarClasse = document.getElementById(elementoSorteadoHTML)
	 	console.log(trocarClasse)
	 	trocarClasse.classList.toggle("sorteado");

	 	console.log("número de letras restantes:", alfabeto.length)

	 	alfabeto.splice(numeroSorteado,1)

	} else {
		alert("todas a letras já foram sorteadas!")
  	}
  	return 0;
}

function novoJogo() {
	alfabeto = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z"
	]

	trocarClasse =  document.querySelectorAll("li.sorteado")
	console.log(trocarClasse.length)
	

	trocarClasse.forEach(
		function resetarClasse(token){
			document.getElementById(token.id).classList.toggle("sorteado")
		}


	)

	alert("Jogo reiniciado!")

	console.log("Jogo reiniciado!")
	console.log("número de letras restantes:", alfabeto.length)

	

	return 0
}