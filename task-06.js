let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число'); 
  if (input === null) {
     break;
  }

input = Number(input);
numbers.push(input);
const notANumber = Number.isNaN(input);
if (notANumber) {
  console.log('Было введено не число, попробуйте еще раз');
  continue;
}
}

const summa = function (numbers) {
  for (const number of numbers) {
    total += number;
  }
  if (total === 0) {
    return 'Отмена пользователем';
  } else {
  return `Общая сумма чисел равна ${total}`;
  }
  };
  
console.log(summa(numbers));

 
