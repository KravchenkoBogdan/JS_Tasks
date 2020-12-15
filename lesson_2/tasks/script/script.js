// 1. Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// function confirm_ending(str, target) {
//   if (str.slice(str.length - target.length) === target) {
//     console.log('correct');
//   }
// }
//
// confirm_ending("hello my dear", "dear");

// 2. Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeat_string_num_times(str, num) {
//   var str_repeat = '',
//       i = 0;
//   for(i; i < num; i += 1){
//     str_repeat += str;
//   }
//   return(str_repeat);
// }
//
// repeat_string_num_times("*", 3);

//3. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 4. Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// function find_element(arr, func) {
//   let num = 0;
//   for (var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }
//
// find_element([1, 2, 3, 4], num => num % 2 === 0);

// 5. Check if a value is classified as a boolean primitive. Return true or false.

// function boo_who(bool) {
//   if (typeof bool === 'boolean') {
//     console.log("true");
//   } else console.log("false");
// }
//
// boo_who(false);
