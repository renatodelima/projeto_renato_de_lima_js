var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  comparaStrings();

});



function comparaStrings() {
  
  let string1 = document.getElementById("string1").value;
  let string2 = document.getElementById("string2").value;

  let resultado_comparacao;

  if (string1 == string2) {
    resultado_comparacao = "As strings são iguais";
  } else {
    resultado_comparacao = "As strings são diferentes";
  }

  document.getElementById("resultado_comparacao").value = resultado_comparacao;
}
