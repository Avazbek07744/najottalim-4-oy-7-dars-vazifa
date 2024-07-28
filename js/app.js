//? funksiyalar
//! 1-misol \\\

// function ildizi(num) {
//     if (num < 0) {
//         return "Musbat son kiriting";
//     } else {
//         return Math.sqrt(num);
//     }
// }

// let son = +prompt('Son kiriting');
// let kvadratIldiz = ildizi(son);
// console.log(`Berilgan ${son} sonining kvadrat ildizi: ${kvadratIldiz}`);

//! 2-misol \\\

// function sum(a, b) {
//     let c = a - b
//     return c;
// }

// let res = sum(9, 7)
// console.log(res);

//! 3-misol \\\

// function repeatString(str, num) {
//     let str1 = '';
//     for (let i = 0; i < num; i++) {
//         str1 += str;
//     }
//     return str1;
// }

// let string = "Salom";
// let count = 3;
// console.log(repeatString(string, count));

//! 4-misol \\\

// function num(num1) {
//     let kub = num1 ** 3
//     return kub
// }

// let num1 = 3;
// let res = num(num1)
// console.log(res);

//! 5-misol \\\

// function butunQisim(son1, son2) {
//     if (son2 == 0) {
//         return "Bo'linma noldan bo'linmaydi";
//     }

//     return Math.trunc(son1 / son2);
// }
// let son1 = prompt('Son kiritng')
// let son2 = prompt('Son kiritng')
// let res = butunQisim(son1, son2)

// console.log(res);

//! 6-misol \\\

// function asr(a) {
//     let res;
//     if (a > 2000) {
//         res = '21-asr'
//     } else if (a > 1900) {
//         res = '20-asr'
//     } else{
//         res = '19-asr'
//     }
//     return res
// }

// let a = +prompt('Yilni kiriting')
// let res = asr(a)
// console.log(res);

//! 7-misol \\\

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// let n = +prompt("son kiriting")
// let res = factorial(n)
// console.log(res);

//! 8-misol \\\

// function unlilarSoni(satr) {
//     const unlilar = 'aeiouAEIOU';
//     let hisob = 0;

//     for (const belgi of satr) {
//         if (unlilar.includes(belgi)) {
//             hisob++;
//         }
//     }

//     return hisob;
// }
// let satr = prompt("So'z yozing") 
// let res = unlilarSoni(satr)
// console.log(res); 

//! 9-misol \\\

// function str(raqam, satr) {
//     if (typeof satr !== 'string') {
//         return "Satr kiritish kerak.";
//     }

//     if (satr.length <= raqam) {
//         return "Kesib olish uchun kiritilgan raqamdan katta yoki teng bo'lishi kerak.";
//     }

//     return satr.slice(-raqam);
// }

// let res1 = str(6, "JavaScript");
// let res2 = str(5, "Hello, world!");

// console.log(res1);
// console.log(res2);

//! 10-misol \\\

// function raqamlar(satr) {
//     if (satr.length == 0) {
//         return false;
//     }

//     for (const belgi of satr) {
//         if (belgi < '0' || belgi > '9') {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(raqamlar("12345"));

//! 11-misol \\\

// function daraja(a, b) {
//     let res = a ** b
//     return res
// }

// let a = +prompt("Son kiriting")
// let b = +prompt("Soning darajasini kiriting")
// let res = daraja(a, b)
// console.log(res);

//! 12-misol \\\

// function probelsiz(a) {
//     return a.split(' ').join('');
// }

// let a = prompt("Ikkita so'z yozing")
// let res = probelsiz(a)
// console.log(res);

//! 13-misol \\\

// function str(a, b) {
//     let res = a+b
//     return res
// }

// let a = prompt("So'z kiriting")
// let b = prompt("So'z kiriting")
// let res = str(a, b)
// console.log(res);

//! 14-misol \\\

// function tasodifiySon(a, b) {
    // return Math.trunc(Math.random() * (b - a + 1));
// }

// let a = prompt("Son kiriting")
// let b = prompt("Son kiriting")
// let res = tasodifiySon(a, b)
// console.log(res);

//! 15-misol \\\

// function str(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// let user = 'salom';
// let res = str(user);
// console.log(res);

//! 1-misol \\\

// function sum(arr) {
//     let sum1 = 0
//     for (const iterator of arr) {
//         sum1 = sum1 + iterator
//     }
//     return sum1
// }

// let arr = [1,2,3,4]
// let res = sum(arr)
// console.log(res);

//! 2-misol \\\

// function max(arr) {
//     let max1 = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max1 < arr[i]) {
//             max1 = arr[i]
//         }
//     }
//     return max1
// }

// let arr = [1, 2, 3, 4]
// let res = max(arr)
// console.log(res);

//! 3-misol \\\

// function massive(arr) {
//     let res2 = []
//     for (const iterator of arr) {
//         res2.unshift(iterator)
//     }
//     return res2
// }

// let arr = [1, 2, 3, 4]
// let res = massive(arr)
// console.log(res);

//! 4-misol \\\

// function musbat(arr) {
//     let res2 = []
//     for (const iterator of arr) {
//         if (iterator > 0) {
//             res2.push(iterator)
//         }
//     }
//     return res2
// }

// let arr = [1, 2, 3, -4]
// let res = musbat(arr)
// console.log(res);

//! 5-misol \\\

// function kavadrati(arr) {
//     let res=[];
//     for (const iterator of arr) {
//         res.push(iterator**2)
//     }
//     return res
// }

// let arr = [1,2,3,4,5]
// let res2 = kavadrati(arr)
// console.log(res2);

//? 6-misol \\\
// function takroriyE(arr) {
//     let res1 = []
//     for (const iterator of arr) {
//         if (iterator == iterator ) {
//             res1.push(iterator)
//         }
//     }
//     return res1
// }

// let arr = [1, 2, 3, 4,4]
// let res = takroriyE(arr)
// console.log(res);

//! 7-misol \\\

// function concat(arr1, arr2) {
//     let res = arr1.concat(arr2)
//     return res
// }

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 9, 8, 4, 6]

// let res = concat(arr1, arr2)
// console.log(res);

//! 8-misol \\\

// function toq(arr) {
//     let res = []
//     for (const iterator of arr) {
//         if (iterator % 2 == 1) {
//             res.push(iterator)
//         }
//     }
//     return res
// }

// let arr = [1, 9, 8, 17, 35, 10]
// let res = toq(arr)
// console.log(res.length);

//! 9-misol \\\

// function toq(arr) {
//     let res = []
//     for (const iterator of arr) {
//         res.push(iterator + a)
//     }
//     return res
// }

// let arr = [1, 9, 8, 7, 5, 10]
// let a = +prompt('son kiriting')
// let res = toq(arr)
// console.log(res);

//! 10-misol \\\

// function min(arr) {
//     let min = arr[0]

//     for (let i = 1; i <= arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min
// }

// let arr = [10, 2, 30, 42, 55, 67, 7, 8, 9, 1]
// let res = min(arr)

// console.log(res);