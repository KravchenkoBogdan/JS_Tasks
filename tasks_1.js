// task_1.
// Convert Celsius to Fahrenheit

// function convertToF(celsius) {
//   var fahrenheit = (celsius * 9/5) + 32 ;
//   return(fahrenheit);
// }
// convertToF(parseFloat(prompt("Введите градусы цельсия", "")));

// task_2.
// Reverse a String

// function reverseString(str) {
//   var new_rev_string = '',
//   i,
//   size = str.length - 1;
//   for(i = size; i >= 0; i -= 1) {
//     new_rev_string += str[i];
//   }
//   return(new_rev_string);
// }
// reverseString("hello");

// task_3.
// Factorialize a Number

// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   } else return num * factorialize(num - 1);
// }
// alert(factorialize(parseInt(prompt("Получите Факториал числа: ", ""))));

// task_4.
// Find the Longest Word in a String

// function findLongestWord(str) {
//   var array = str.split(" ");
//   array.sort(function(a,b) {
//     return b.length - a.length;
//   });
//   return array[0].length;
// }
//
// alert(findLongestWord("May the force be with you"));

// task_5.
// Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//   var largest_arr = [],
//       size = arr.length,
//       i;
//   for(i = 0; i < size; i += 1) {
//     largest_arr.push(Math.max.apply(null, arr[i]));
//   }
//   return largest_arr;
// }
// alert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
