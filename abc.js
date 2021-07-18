// arr = [1,2,3,4,5,6,7,8,9,10]
//=> =>           <= <=

//     11  
// for(let i = 0 ; i< arr.length ; i++){
//     console.log(arr[i])
// }


// function iteration(arr,i){
//     // i == 9 
//     if(i == arr.length-1){
//         return arr[i]
//     }
//     else{
//         return console.log(`array element = ${arr[i]} index = ${i}`),iteration(arr,i+1)
//     }
// }

// console.log(iteration(arr,0))

// console.log(`array element = ${arr[i]} index = ${i}`),console.log(`array element = ${arr[i]} index = ${i}`),console.log(`array element = ${arr[i]} index = ${i}`),
// console.log(`array element = ${arr[i]} index = ${i}`),iteration(arr,i+1)

///////////////////////

// function iteration1(arr,i){

//     if(i > arr.length-1){
//         return
//     }
//     else{
//         if (arr[i]%2==0){
//             console.log(arr[i],i)
//         }
//         else if (arr[i]%2!=0){
//             console.log( "odd" + arr[i],i)
//         }
//         return iteration1(arr,i+1)
//     }
// }

// iteration1(arr,0)

// let input = "4\n1 5 7 9 55 91\n1 2 3 4 6 8 9 11";
// main(input);

// function main(input) {
//   input = input.split("\n");
//   let size = Number(input.shift());
//   let arr1 = input[0].split(" ").map(Number);
//   let arr2 = input[1].split(" ").map(Number);
//   let output = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       output.push(arr1[i]);
//       i++;
//     } else{
//       output.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < arr1.length) {
//     while (i < arr1.length) {
//       output.push(arr1[i]);
//       i++
//     }
//   }
//   if (j < arr2.length) {
//     while (j < arr2.length) {
//       output.push(arr2[j]);
//       j++
//     }
//   }
//   console.log(output);
// }

///////

// let arr = [5, 1, 4, 7];
// let hight = 0
// let start = 0;
// let end = arr.length;

// console.log(mergeSort(start, end));

// function merge(start, mid, end) {
//     console.log("----merge function----")
//   let output = [];
//   arr1 = arr.slice(start, mid+1);
//   arr2 = arr.slice(mid + 1, end+1);
//   console.log(`left array ${arr1}-----right array ${arr2}`)
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       output.push(arr1[i]);
//       i++;
//     } else {
//       output.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < arr1.length) {
//     while (i < arr1.length) {
//       output.push(arr1[i]);
//       i++;
//     }
//   }
//   if (j < arr2.length) {
//     while (j < arr2.length) {
//       output.push(arr2[j]);
//       j++;
//     }
//   }
//   console.log(`output of merge function = ${output}\n`)
//   return output;
// }


// function mergeSort(start, end) {

//   if (start < end) {
//     let mid = Math.floor((start + end) / 2);

//     console.log(`hight of recursive tree ${hight}\n`)
//     hight++
//     console.log(`mergeSort function call with start index = ${start}-----and end index = ${mid} of line 1`)

//     mergeSort(start, mid);

//     console.log(`mergeSort function call with start index = ${mid+1}-----and end index = ${end} of line 2 \n`)

//     mergeSort(mid + 1, end);

//     hight--
//     console.log(`merge function call with start = ${start} ----- mid = ${mid} ----- end = ${end}\n`);

//     merge(start, mid, end);
//   }
//     return arr
//   }

// let arr = [4, 2, 5, 8];

// let start = 0;

// let hight = 0

// let end = arr.length - 1;

// function merge(arr, start, end) {
//     console.log("----merge function----")
//   let mid = Math.floor((start + end) / 2);
//   let i = start;
//   let j = mid + 1;
//   let k = start;
//   let temp = [];
//   while (i <= mid && j <= end) {
//     if (arr[i] < arr[j]) {
//       temp[k++] = arr[i++];
//     } else {
//       temp[k++] = arr[j++];
//     }
//   }
//   while (i <= mid) {
//     temp[k++] = arr[i++];
//   }
//   while (j <= end) {
//     temp[k++] = arr[j++];
//   }
//   for (let l = start; l <= end; l++) {
//     arr[l] = temp[l];
//   }
//   console.log(`output of merge function = ${arr}\n`)
//   return arr;
// }

// function merge_Sort(arr, start, end) {
//   if (start < end) {
//     let mid = Math.floor((start+end)/2);
//     console.log(`hight of recursive tree ${hight}\n`)
//     hight++
//     console.log(`mergeSort call with start = ${start} ----- and mid = ${mid} of line 1 call`)
//     merge_Sort(arr, start, mid);
//     console.log(`mergeSort call with mid+1 = ${mid+1} -----and mid = ${end} of line 2 call \n`)
//     merge_Sort(arr, mid + 1, end);
//     console.log(`hight of recursive tree ${hight}\n`)
//     hight--
//     console.log(`merge call with start = ${start} ----- mid = ${mid} ----- end = ${end}\n`);
//     merge(arr, start, end);
//     console.log(`hight of recursive tree ${hight}\n`)
//   }
//   return arr;
// }

// let mergex = merge_Sort(arr, start, end);

// console.log(mergex);


// function fact(){

// }
// let input = `2
// 3
// abc
// 4
// abcd`

// x(input)

// function x (input) {
// input = input.split("\n")
//     let testcase = Number(input.shift())
//     for(let i = 0 ; i < input.length ; i++){
//         let end = input[i]
//         i++
//         let str = input[i]
//         console.log(encrypt(str,0,end-1))
//     }
// } 

// function encrypt(str,start,end){
//     if(start == end){
//         return str[start]
//     }   
//     else {
//         if(start < end){
//             let mid = Math.floor((start+end)/2)
//             return str[mid]+encrypt(str,start,mid-1)+encrypt(str,mid+1,end)
//         }
//         return ""
//     }
// // }
// let input = `4 10\n5 14 2 4`
// input = input.split("\n")
//   	let [size, total] = input[0].split(" ").map(Number)
//     let arr = input[1].split(" ").map(Number)
//     let count = 0
//     //console.log(arr)
//     arr.sort((a,b) => a-b)
//     //console.log(arr)
//     arr.forEach((elem) => {
//       if(total >= elem){
//         total-=elem
//         count++
//       }
//     })
//   console.log(count)