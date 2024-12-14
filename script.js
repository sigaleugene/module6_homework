/*
Задание 6.6.1
Палиндром — это слово или выражение, которое читается в обе стороны одинаково.
Примеры
— Довод
— А роза упала на лапу Азора
Напишите проверку, которая позволит определить, является слово палиндромом или нет.
Если является, то выведите в консоль фразу «Слово <слово> является палиндромом». Если нет — «Слово <слово> не является палиндромом».
*/

function palindrom(word) {
  str = word.toUpperCase().replace(/ /g, "");
  flag = true;
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] != str[str.length - 1 - index]) {
      flag = false;
      break;
    }
  }
  return flag
    ? `Слово ${word} является палиндромом` : `«Слово ${word} не является палиндромом»`;
}

console.log(palindrom("Довод"));
console.log(palindrom("А роза упала на лапу Азора"));

/*
   Задание 6.6.2
   Есть массив:
   const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
   Создайте новый массив и запишите в него только уникальные значения из массива arr. Выведите получившийся массив в консоль. 
*/

function getUniq(arr) {
  let newSet = new Set(arr);
  return new Array(...newSet);
}

const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  "they",
  "don't",
  "know",
  "that",
  "we",
  "know",
  "that",
  "they",
  "know",
];

console.log(getUniq(arr));

/*
    Задание 6.6.3
    Запросите у пользователя любое число. 
    На основании ответа создайте массив и заполните его числами от нуля до введённого числа. 
    Не забудьте привести полученное от пользователя значение к типу number.
    Входные данные: 5
    Выходные данные: [0, 1, 2, 3, 4, 5]
*/

function getArray(count) {
    let result = [];
    for (let index = 0; index <= count; index++) {
        result.push(index);
    }
    return result;
}

function creatArray(){
    do{
        var count = parseInt(prompt('введите колличество элементов'));
        if(isNaN(count))
            alert("Неверно. Введите целое число.");
    }while(isNaN(count))
    var result = getArray(count);
    console.log(result);
}

creatArray();

/*
Задание 6.6.4
С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.

Выходные данные:
x o x
o x o
x o x
*/

const pole = [['x','o','x'],
              ['o','x','o'],
              ['x','o','x']];

function printPole(pole){
    for (let i = 0; i < pole.length; i++) {
        let row ='';
        for (item of pole[i]) {
            row+=item;
        }
        console.log(row);
    }
}

printPole(pole);

/*
Задание 6.6.5
Есть объект obj. В одном из ключей объекта — массив. 
Добавьте в новый массив arrValues значения всех ключей объекта. 
Если значение — массив, добавьте каждый элемент в массив arrValues.
Выведите получившийся массив в консоль.
Входные данные:
    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]
*/
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

function getArrValues(obj){
    let result =[];
    for (const key in obj) {
        if(Array.isArray(obj[key]))
            result.push(...obj[key]);
        else
            result.push(obj[key]);
    }
    return result;
}
console.log(getArrValues(obj));
