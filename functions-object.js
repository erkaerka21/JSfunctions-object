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
find = getexactTemdegt("+", "!&+=*@%-");
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
  for (i = 2; i < too; i++) {
    if (too % i == 0) {
      return false;
    }
  }
  return true;
}
if (checkPrimenumber(8)) {
  console.log("энэ тоо бол анхны тоо");
} else {
  console.log("энэ тоо бол анхны тоо биш");
}
//   huvaagch = too - 1;
//   while (huvaagch > 1) {
//     if (too % huvaagch == 0);
//     return "анхны тоо биш : " + too;
//     huvaagch = huvaagch - 1;
//   }
//   return "анхны тоо мөн юм : " + too;
// }
// if (checkPrimenumber) {
//   console.log("анхны тоо биш : ");
// } else console.log("анхны тоо мөн юм : ");
// find = checkPrimenumber(7);
// function checkPrimenumber(too) {
//   for (i = 1; i < huvaagch; i++) {
//     if (too % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

//daalgavar7   Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
function palindrome(n) {
  let too = 0;
  let urvuuToo = 0;
  let firstNumber = n;
  while (n > 0) {
    too = n % 10;
    urvuuToo = urvuuToo * 10 + too;
    n = n - too;
    n = n / 10;
  }

  if (urvuuToo === firstNumber) {
    return true;
  } else {
    return false;
  }
}

find = palindrome(1221);
if (find) {
  console.log("palindrome мөн");
} else {
  console.log("palindrome биш");
}

//daalgavar8 Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
// function urvuulah(word) {
//   let alpha5 = word[0];
//   let alpha4 = word[1];
//   let alpha3 = word[2];
//   let alpha2 = word[3];
//   let alpha1 = word[4];
//   return alpha1 + alpha2 + alpha3 + alpha4 + alpha5;
// }
function urvuulah(word) {
  let urvuuW = "";
  let alpha;
  for (let i = word.length - 1; i >= 0; i--) {
    alpha = word[i];
    urvuuW = urvuuW + alpha;
  }
  return urvuuW;
}
let text = "сайн байна уу";
find = urvuulah(text);
console.log("анхны эх : ", text);
console.log("урвуулсан эх : ", find);

//daalgavar9
// Эхний объектыг хэвлэж гаргах
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
// Сурагчдын насны дунджийг олох функц бичих
// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 60-аас дээш оноо авсан cурагчдийг тоол

let student = { name: "Сэд-Эрдэнэ", age: 19, gender: "male", points: 70 };
let students = [
  { name: "Сэд-Эрдэнэ", age: 19, gender: "male", points: 70 },
  { name: "Индра", age: 19, gender: "female", points: 50 },
  { name: "Хатнаа", age: 21, gender: "male", points: 99 },
  { name: "Тэмүүлэн", age: 23, gender: "male", points: 55 },
  { name: "Намуун", age: 23, gender: "female", points: 85 },
];
console.log("Сурагчдын мэдээлэл : ", students);
// Эхний объектыг хэвлэж гаргах
console.log("эхний сурагчын мэдээлэл : ", students[0]);

//Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
function erEmiigtooloh(arr) {
  console.log("students", students);
  let maleN = 0;
  let femaleN = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "male") {
      maleN++;
    }
    if (students[i].gender === "female") {
      femaleN++;
    }
  }
  return { эрэгтэй_сурагчдын_тоо: maleN, эмэгтэй_сурагчдын_тоо: femaleN };
}
// {male" 3, femail: 2}
find = erEmiigtooloh(students);
console.log("эрэгтэй, эмэгтэй сурагчдын тоо : ", find);
// if(students[0].gender === "male") {
//   return true
// }
// if(students[1].gender === "male") {
//   return true
// }
// if(students[i].gender === "male") {
//   return true
// }
// console.log("studeents", students[2].gender);
// console.log("studeents", students[3].gender);

// Сурагчдын насны дунджийг олох функц бичих
function average(arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  average = sum / arr.length;
  return average;
}
let findAverage = average(students);
console.log("ангийн сурагчдын насны дундаж утга : ", findAverage);

// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
function countOverAge21(arr) {
  let studentNoverAge21 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 21) {
      studentNoverAge21++;
    }
  }
  return studentNoverAge21;
}
let findNumberOver21 = countOverAge21(students);
console.log("21 болон түүнээс дээш насны сурагчдын тоо : ", findNumberOver21);

// 60-аас дээш оноо авсан cурагчдийг тоол
function countOverPoint60(arr) {
  let studentNOverPoint60 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].points > 60) {
      studentNOverPoint60++;
    }
  }
  return studentNOverPoint60;
}
let findOverPoint60 = countOverPoint60(students);
console.log("60 аас дээш оноо авсан сурагчдын тоо : ", findOverPoint60);
