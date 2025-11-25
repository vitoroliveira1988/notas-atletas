# 🏅 Calculadora de Média de Notas de Atletas (JavaScript)

Este é um script simples em **JavaScript** que demonstra como calcular a média de notas de um grupo de atletas, desconsiderando a maior e a menor nota para garantir uma avaliação mais justa. O padrão de cálculo é comum em algumas modalidades esportivas para mitigar valores extremos.

---

## 🚀 Funcionalidade

A função principal, `calcularMedias`, processa um *array* de atletas. Para cada atleta, o script realiza as seguintes etapas:

1.  **Ordenação**: As 5 notas são ordenadas do menor para o maior.
2.  **Descarte**: A nota mais baixa (posição 0) e a nota mais alta (posição final) são removidas.
3.  **Cálculo**: A média aritmética das **três notas intermediárias** restantes é calculada.
4.  **Exibição**: O nome do atleta, as notas originais e a média válida são impressos no console.

---

## 🛠️ Código-Fonte

Este bloco mostra a estrutura de dados e a função que realiza o cálculo:

### Dados de Entrada

Os dados de exemplo estão definidos no *array* `atletas`:

```javascript
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
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
