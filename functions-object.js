// let a = 12;
// let b = 16;
// function hevle() {
//   console.log("2 toonii niilber : ", a + b);
// }
// console.log("Functions");
// hevle();

// function hevle2(x1, x2) {
//   console.log("2 тооны нийлбэр", x1 + x2);
// }

// hevle2(2, 6);
// hevle2(78, 6);

// function nemeh2(X, Y) {
//   return X + Y;
// }
// let sumReturn = nemeh2(16, 39);
// console.log("2 тооны нийлбэр буцаадаг : ", sumReturn);

//daalgavar2
// function plus(a, b) {
//   return a + b;
// }
// let plusReturn = plus(16, 29);
// console.log(plusReturn);
// function negative(a, b) {
//   return a - b;
// }
// let negativeReturn = plus(31, 19);
// function urjver(a, b) {
//   return a * b;
// }
// let urjverReturn = plus(16, 8);
// function noogdvor(a, b) {
//   return a / b;
// }
// let noogdvorReturn = plus(76, 38);

// //хувьсагчид функц өгөх
// let nemekh = function (a, b) {
//   //anonymous function
//   return a + b;
// };
// nemekh();

//daalgavar1   Өгөгдсөн 2 тооны ихийг олох функц бич.
function compare(x, y) {
  if (x > y) {
    return "хамгийн их утга : " + x;
  } else if (y > x) {
    return "хамгийн их утга : " + y;
  } else {
    return "хоорондоо тэнцүү";
  }
}
let compareN = compare(15, 19);
console.log(compareN);

//daalgavar2   Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function getexactnumber(number, numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (number == numbers[i]) {
      return "өгөгдсөн array дотор өгөгдсөн тоо байна : " + numbers[i];
    } else {
    }
  }
  return -1;
}
let find = getexactnumber(7, [2, 4, 6, 7, 9, 10, 3, 16]);
console.log(find);

//daalgavar3   Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function getexactTemdegt(temdegt, temdegts) {
  for (i = 0; i < temdegts.length; i++) {
    if (temdegt === temdegts[i]) {
      return "өгөгдсөн array дотор өгөгдсөн тоо байна : " + temdegts[i];
    } else {
    }
  }
  return -1;
}
find = getexactTemdegt("!", ["&", "!", "+", "=", "*", "@", "%", "-"]);
console.log(find);

//daalgavar4  Өгөгдсөн array - ийн дундажыг олох функц бич.
// let toonuud = function (16, 29, 46, 3, 109, 92, 97, 208);
let sum = 0;
function calculateAverage(toonuud) {
  for (i = 0; i < toonuud.length; i++) {
    sum += toonuud[i];
  }
  console.log("Өгөгдсөн тоонууд нийлбэр : ", sum);
  return "Өгөгдсөн тоонуудын дундаж : " + sum / toonuud.length;
}
find = calculateAverage([16, 29, 46, 3, 109, 92, 97, 208]);
console.log(find);

//daalgavar5 Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
sum = 0;
function calculateSum(toonuud) {
  for (i = 0; i < toonuud.length; i++) {
    sum += toonuud[i];
  }
  console.log("Өгөгдсөн тоонууд нийлбэр : ", sum);
}
find = calculateSum([9, 46, 3, 109, 92, 97]);

//daalgavar6   Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function checkPrimenumber(too) {
  // {
  //     huvaagch = too - 1;
  //   for (i = 1; i < huvaagch; i++) {

  //     huvaagch++;
  //     too % huvaagch == 0;
  //     if (too % huvaagch !== 0) {
  //       console.log("Анхны тоо бол мөн : ", too);
  //     } else {
  //       console.log("Анхны тоо биш юм : ", too);
  //     }
  //   }
  // }
  huvaagch = too - 1;
  while (huvaagch > 1) {
    if (too % huvaagch == 0);
    return "анхны тоо биш : " + too;
    huvaagch = huvaagch - 1;
  }
  return "анхны тоо мөн юм : " + too;
}
if (checkPrimenumber) {
  console.log("анхны тоо биш : ");
} else console.log("анхны тоо мөн юм : ");
find = checkPrimenumber(7);
