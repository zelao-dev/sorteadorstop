console.log("seja bem vindo!")

var alfabeto = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"]

function Sortear() {
	if (alfabeto.length > 0) {
		numeroSorteado = Math.floor(Math.random() * (alfabeto.length - 1))
	 	console.log("sorteado:",numeroSorteado, alfabeto.at(numeroSorteado))
	 	
	 	elementoSorteadoHTML = alfabeto.at(numeroSorteado)
	 	console.log(elementoSorteadoHTML)

	 	//altera o botão do número sorteado
	 	document.getElementById("letraSorteada").innerHTML =elementoSorteadoHTML
	 
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
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"
	]

	trocarClasse =  document.querySelectorAll("li.sorteado")
	console.log(trocarClasse.length)
	

	trocarClasse.forEach(
		function resetarClasse(token){
			document.getElementById(token.id).classList.toggle("sorteado")
		}


	)

	document.getElementById("letraSorteada").innerHTML = "..."
	

	console.log("Jogo reiniciado!")
	console.log("número de letras restantes:", alfabeto.length)

	

	window.setTimeout(function mensagemAlerta(){
                alert("Jogo reiniciado!")
            }, 100)
	

	return 0
}