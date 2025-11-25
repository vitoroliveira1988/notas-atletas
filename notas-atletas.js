let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedias(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {

    let nome = listaAtletas[i].nome;
    let notas = listaAtletas[i].notas;

    // Ordena as notas do menor para o maior
    let notasOrdenadas = notas.slice().sort((a, b) => a - b);

    // Remove a menor (posição 0) e a maior (última posição)
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Calcula a média das 3 notas intermediárias
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });

    let media = soma / notasComputadas.length;

    // Exibe os resultados
    console.log(`Atleta: ${nome}`);
    console.log("Notas Obtidas: " + notas.join(","));
    console.log("Média Válida: " + media);
    console.log(""); // linha em branco
  }
}

// Executa a função
calcularMedias(atletas);