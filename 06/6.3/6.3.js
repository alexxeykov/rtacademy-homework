//1 варіант. Простий і, мабуть, що найочевидніший варіант з використанням знань математики першого класу
let a = 10,
    b = 20;
a += b;
b = a - b;
a -= b;
console.log(a, b); // => 20, 10

//2 варіант. Перетворення "a" та "b" у масив з подальшим вилученням кожного значення
a = 10;
b = 20;
a = [a, b];
b = a[0];
a = a[1];

console.log(a, b) // => 20, 10

//3 варіант. На мій погляд найпростіший та найкращий варіант зі зміною місцями змінних
a = 10;
b = 20;
[a, b] = [b, a];
console.log(a, b); // => 20, 10

//4 варіант.
a = 10;
b = 20;
a = [b, b = a][0];
console.log(a, b); // => 20, 10