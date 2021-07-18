// let input = `1
// 12`;

// input = input.split("\n");

// let tcs = Number(input.shift());

// for (let i = 0; i < tcs; i++) {
//   console.log(find(Number(input[i])));
// }

// function find(n) {
//   let count = 0;
//   if (n % 4 === 0) {
//     count++;
//   } else if (n % 8 === 0) {
//     count++;
//   }
//   // console.log(n%8)
//   while (n > 0) {
//     n % 4;
//     n = n % 4;
//     count++;
//     n % 8;
//     n = n % 8;
//     count++;
//   }
//   return count;
// }

// 8,4
// 4,8
// 4,4,4

// let input = `4
// 2 10
// 4 4
// 20 8
// 22 15`

// input = input.split("\n")

// let tcs = Number(input.shift())

// for(let i = 0 ; i < tcs; i++){
//     let n = Number(input[i].split(" ")[0])
//     let m = Number(input[i].split(" ")[1])
//     console.log(find(n,m))
// }

// function find(n, m) {
//   let trip_count = 0;
//   let current_planet = "";
//   let current_n = n;
//   let current_m = m;
//   while (current_n > 0 || current_m > 0) {

//     if (current_planet !== "mars") {
//       current_planet = "mars";
//       current_n = current_n + 3;
//       current_m = current_m + 2;
//       trip_count++;
//     }
//     else if (current_n - 20 > 0 && current_planet !== "earth") {
//       current_planet = "earth";
//       current_n = current_n - 20;
//       current_m = current_m + 5;
//       trip_count++;
//     }
//     else if (current_n - 5 > 0 && current_m - 10 > 0 && current_planet !== "mercury") {
//       current_planet = "mercury";
//       current_n = current_n - 5;
//       current_m = current_m - 10;
//       trip_count++;
//     } else {
//       break;
//     }
//     console.log(current_planet)
//   }

//   return trip_count;
// }

// let input = `2
// 5
// 1 2 3 4 5
// 2
// 100 1`

// input = input.split("\n")

// var tcs = Number(input.shift())
// let line = 0
// for(let i = 0 ; i < tcs; i++){
//     let size = Number(input[line])
//     line++
//     let arr = input[line].split(" ").map(Number)
//     line++
//     let sum = 0
//     for(let j = 0 ; j < size; j++){
//         sum+=(j+1)*arr[j]
//     }
//     console.log(sum)
// }
