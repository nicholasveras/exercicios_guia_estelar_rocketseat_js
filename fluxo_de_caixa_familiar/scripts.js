/* 2 Fluxo de caixa familiar
 Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
  incomes: [22500, 3200, 250, 150, 75, 254.43, 654.76],
  expenses: [79.9, 350.21, 454.43, 9440.34, 3221.54],
};
function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}
function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itskOk = total >= 0;
  const itsNot = total <= 0;

  let balanceText = "negativo";
  if (itskOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`);
}

calculateBalance();
