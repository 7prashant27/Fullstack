// 919844280806, ashishbhuwania@gmail.com



// Boiler code for oj


// function runProgram(input){


// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
// 	read = read.replace(/\n$/,"")
// 	read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

// // let input = "26"
// // input = Number(input)
// //   let res = find_Steps(input,0)
// //   console.log(res)
// //   function find_Steps(input,i){
// //     if(input > 5){
// //         if (input%5 == 0){
// //             i = input/5
// //             //console.log(i)
// //             return i
// //         }
// //         else{
// //             i = Math.floor(input/5)
// //             return find_Steps(input%5,i)
// //         }
// //     }
// //     else if(input < 5){
// //         return i+1
// //     }

// //   }

// //   let arr = [4, 1, 5, 7];

// // let start = 0;

// // let end = arr.length - 1;

// // function merge(arr, start, end) {
// //   let mid = Math.floor((start + end) / 2);
// //   let i = start;
// //   let j = mid + 1;
// //   let k = start;
// //   let temp = [];
// //   while (i <= mid && j <= end) {
// //     if (arr[i] > arr[j]) {
// //       temp[k++] = arr[i++];
// //     } else {
// //       temp[k++] = arr[j++];
// //     }
// //   }
// //   while (i <= mid) {
// //     temp[k++] = arr[i++];
// //   }
// //   while (j <= end) {
// //     temp[k++] = arr[j++];
// //   }
// //   for (let l = start; l <= end; l++) {
// //     arr[l] = temp[l];
// //   }
// //   return arr;
// // }

// // function merge_Sort(arr, start, end) {
// //   if (start < end) {
// //     let mid = Math.floor((start+end)/2);
// //     merge_Sort(arr, start, mid);
// //     merge_Sort(arr, mid + 1, end);
// //     merge(arr, start, end);
// //   }
// //   return arr;
// // }

// // let mergex = merge_Sort(arr, start, end);

// // console.log(mergex);

// // let input = `5
// // 2 3 1 4 5`

// //  input = input.split("\n")

// //     let start = 0
// //     let end = arr.length - 1
// //     let res = merge_Sort(arr,start,end)
// //       console.log(res)

// //     function merge_Sort(arr,start,end){
// //       if(start < end){
// //         let mid = Math.floor((start+end)/2)
// //         merge_Sort(arr,start,mid)
// //         merge_Sort(arr,mid+1,end)
// //         merge(arr,start,end)
// //       }
// //       return arr
// //     }

// //   	function merge(arr,start,end){
// //       let mid = Math.floor((start+end)/2)
// //       let i = start
// //       let j = mid + 1
// //       let k = start
// //       let temp = []
// //       while(i <= mid && j <=end){
// //         if (arr[i] > arr[j]){
// //           temp[k++] = arr[i++]
// //         }
// //         else {
// //           temp[k++] = arr[j++]
// //         }
// //       }
// //       while(i <= mid){
// //         temp[k++] = arr[i++]
// //       }
// //       while(j <= end){
// //         temp[k++] = arr[j++]
// //       }
// //       for(let z = start; z <= end; z++){
// //         arr[z] = temp[z]
// //       }
// //       return arr
// //     }

// let input = `3
// 4 -4 2 6
// 4 0 5 8`
// input = input.split("\n")
// let size = Number(input.shift())
// let [student, room] = input.map(elem => elem.split(" ").map(Number))
// let time = []
// for (let i = 0; i < size; i++) {
//   let min = 1000
//   for (let j = 0; j < size; j++) {
//     if (student[i] - room[j] < 0) {
//       if ((student[i] - room[j]) * (-1) < min) {
//         min = (student[i] - room[j]) * (-1)
//       }
//     }
//     else {
//       if (student[i] - room[j] < min) {
//         min = student[i] - room[j]
//       }
//     }
//     //console.log(`${student[i]} - ${room[j]}  = ${student[i] - room[j]} --- ${min}`)
//   }
//   time.push(min)
// }
// console.log(Math.max(...time))

// input = input.split("\n")
//   	let size = Number(input.shift())
//     let[student,room] = input.map(elem => elem.split(" ").map(Number).sort((a,b)=> a-b))
//     let time = []
//   	for(let i = 0 ; i  < size; i++){
//       if(room[i]-student[i] < 0){
//         time.push((room[i]-student[i])*(-1))
//       }
//       else{
//         time.push(room[i]-student[i])
//       }
//     }
//     //console.log(time,student,room)
//   console.log(Math.max(...time))

// var name = "Masai"
// name[0] = "m"
// console.log(name)

// input = input.split("\n")
// let size = Number(input.shift())
// input = input[0].split(" ").map(Number)
// let total_cost = 0
// let index = 0
// for (let i = 0; i < size; i++) {

//     if(input[index] > input[i]){
//         total_cost+=(i-index)*input[index]
//         index = i
//     }
//     // if (input[i] < input[index]) {
//     //     total_cost += Math.abs(i-index * input[index])
//     //     index = i
//     // }

//     // if (input[i] == Math.min(...input)) {
//     //     total_cost += Math.abs((size - i) * input[index])
//     //     break
//     // }
// }

// total_cost += Math.abs((size-index) * input[index])
// console.log(total_cost)

// let input = `7
// 3 7 2 4 5 1 9`

// input = input.split("\n")
// let size = Number(input.shift())
// input = input[0].split(" ").map(Number)
// let total_cost = 0
// let index = 0
// for (let i = 0; i < size; i++) {

// if(input[i] < input[index]){
//     total_cost+=Math.abs(i*input[index])
//     index = i
// }
// if (input[i] == Math.min(...input)) {
//     total_cost += Math.abs(i-index * input[index])
//     index = i
// }

// if (input[i] == Math.min(...input)) {
//     total_cost += Math.abs((size - i) * input[index])
//     break
// }
// }

// total_cost += Math.abs((size-index) * input[index])
// console.log(total_cost)

// let input = `4
// 2 5 1 6`
// input = input.split("\n")
//       let size = Number(input.shift())
//     input = input[0].split(" ").map(Number).sort((a,b)=> a-b)
//   	let total = 0
//   	for(let i = 0 ; i < size; i++){
//       total+= input[i]*[i]
//     }
//   console.log(total)

// let input = `?bb???`

// input = input.split("")

//   	for(let i = 0 ; i < input.length; i++){

//       if(input[i]=="?"){

//         if(i == 0){
//           input[i] = "a"
//         }

//         else if(i==input.length-1){
//           if(input[i-1] == "a"){
//             input[i] = "b"
//           }
//           else{
//             input[i] = "a"
//           }
//         }

//         else{
//           if(input[i-1] == "a" || input[i+1] == "a" ){
//             input[i]="b"
//           }
//           else{
//             input[i]="a"
//           }
//         }
//       }
//     }

//     console.log(input.join(""))

// let input = `7
// 9:00 9:40 9:50 11:00 15:00 18:00 20:00
// 9:10 12:00 11:20 11:30 19:00 20:00 21:00`

// input = input.split("\n")
// let size = Number(input.shift())

// let arrival = input[0].split(" ").map(elem => elem.split(":").join("")).map(Number)
// let departure = input[1].split(" ").map(elem => elem.split(":").join("")).map(Number)

// //let current_time = arrival[0]
// let platform = [departure[0]]
// let flag = false

// console.log(platform)

// for(let i = 1 ; i < size; i++){
//   //9:00 9:40 9:50 11:00 15:00 18:00 21:00
// //9:10 12:00 11:20 11:30 19:00 20:00 21:50
//     if(arrival[i] < departure[i-1]){

//       for(let j = 0 ; j < platform.length; j++){

//         console.log(`${platform[j]} < ${arrival[i]}`)
//         if(platform[j]< arrival[i]){
//           platform[j] = departure[i]
//           flag = false
//           console.log(platform)
//           break
//         }
//         else{
//           flag = true
//         }
//       }
//       if(flag == true){
//         platform.push(departure[i])
//         console.log(platform)
//       }

//     }
//     else{
//       for(let k = 0 ; k < platform.length; k++){
//         if(platform[k]< arrival[i]){
//           platform[k] = departure[i]
//           console.log(platform)
//           break
//         }
//       }
//     }
// }

// console.log(platform.length)

// let input =`5 10
// 50 40 30 20 10
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100`

// input = input.split("\n")

// let [arr_size, testcase_size] = input.shift().split(" ").map(Number)

// let data = input.shift().split(" ").map(Number).sort((a,b) => a-b)

// let testcase_arr = input.map(Number)

// console.log(data)

// for(let i = 0 ; i < testcase_size; i++){
//   let flag = false
//   for(let j = 0 ; j < arr_size; j++){
//     if(testcase_arr[i] == data[j]){
//         console.log("YES")
//         flag=true
//         break
//     }
//   }
//   if(flag == false){
//     console.log("NO")
//   }
// }

// function binarySearch(input){

//     input = input.split("\n")

//     let [size,key] = input.shift().split(" ").map(Number)
//     let arr = input[0].split(" ").map(Number)
//     arr = arr.sort((a,b) => a-b)
//     let low = 0
//     let high = size
//     while(low <= high){
//       let mid = Math.floor((low+high)/2)
//       if(arr[mid] == key){
//         return 1
//       }
//       else if (arr[mid] > key){
//         high = mid-1
//       }
//       else{
//         low = mid+1
//       }
//     }
//     return -1
// }

// let input = `5 2
// 2 -2 0 3 4`

// input = input.split("\n")
// let [size, key] = input.shift().split(" ").map(Number)
// let arr = input[0].split(" ").map(Number)
// arr = arr.sort((a, b) => a - b)
// let low = 0
// let high = size - 1

// console.log(binarySearch(arr,0, size - 1))

// function binarySearch(arr,low, high) {
//     let mid = low + Math.floor((high - low) / 2)
//     if (low < high) {
//         if (arr[mid] > key) {
//             binarySearch(arr, low, mid - 1)
//         }
//         else if (arr[mid] < key) {
//             binarySearch(arr, mid + 1, high)
//         }
//         else {
//             return 1
//         }
//     }
//         return (-1)
// }

//     input=input.split("\n")
//     let [n,target]=input[0].split(" ").map(Number)
//     let arr=input[1].split(" ").map(Number)
//     arr = arr.sort((a, b) => a - b)

//     let res=BinartSearch(arr,0,n-1)
//     console.log(res)

//     function BinartSearch(arr,lo,hi){
//         let mid=lo+Math.floor((hi-lo)/2)
//        if(lo<hi){
//           if(arr[mid]>target){
//               BinartSearch(arr,lo,mid-1)
//           }
//           else if(arr[mid]<target){
//               BinartSearch(arr,mid+1,hi)
//           }
//           else{
//               return 1
//           }
//        }

//         return -1
//     }

// let input = `5 10
// 50 40 30 20 10
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100`

// input = input.split("\n")
// let [size, testcase] = input[0].split(" ").map(Number)
// let arr = input[1].split(" ").map(Number).sort((a, b) => a - b)
// let testcase_arr = input.slice(2,input.length)
// testcase_arr.forEach(elem => console.log(binarySearchz(arr,Number(elem))))

// function binarySearchz(arr,key){
//     let low = 0
//     let high = arr.length-1
//     while(low <= high){
//         let mid=Math.floor((low)+(high-low)/2)
//       if(arr[mid] == key){
//         return "YES"
//       }
//       else if (arr[mid] > key){
//         high = mid-1
//       }
//       else{
//         low = mid+1
//       }
//     }
//     return "NO"
//    }

//  input=input.split("\n")
//   let [n,k]=input[0].split(" ").map(Number)
//   let arr=input[1].split(" ").map(Number).sort((a,b)=> a-b)
//   let searchArr=[]
//   for(let i=2;i<input.length;i++){
//       let res=discoverNumber(arr,Number(input[i]))
//       console.log(res)
//   }
//   function discoverNumber(arr,target){
//       let lo=0
//       let hi=arr.length-1
//       while(lo<=hi){
//           let mid=Math.floor((lo)+(hi-lo)/2)
//           if(arr[mid]==target){
//               return "YES"
//           }
//           else if(arr[mid]>target){
//               hi=mid-1
//           }
//           else{
//               lo=mid+1
//           }
//       }
//       return "NO"
//   }

// let input = `10 8
// 0 2 4 4 5 5 7 7 9 10`

//   input=input.split("\n")
//    let [n,key]=input[0].split(" ").map(Number)
//    let arr=input[1].split(" ").map(Number).sort((a,b) => a-b)
//    let low=0
//    let high=n-1
//    let res=findLowerBound(low,high,arr,key)
//    console.log(res)

// function findLowerBound(low,high,arr,key){
//    while(low<=high){
//        let mid=Math.floor(low +(high-low)/2)
//       if(arr[mid]<=key){
//           low = mid+1
//         }
//       if(arr[mid]>key){
//         high = mid
//       }
//       if(arr[low]>key){
//         return low
//       }
//    }
// }

// input = input.split("\n")
// let size = Number(input.shift())
// let arr = input.shift().split(" ").map(Number)
// let key = Number(input.shift())
// let low = 0
// let high = arr.length-1
// let count = 0
// let lower = 0
// let upper = 0
// while(low <= high){

//   let mid = Math.floor(low+(high-low)/2)
//   if(arr[mid] == key){
//     count++
//   }

//   if(arr[mid]>= key){
//     if(arr[mid]==key){
//       lower = mid
//       count++
//     }
//     high = mid-1
//   }
//   if(arr[mid]<=key){
//     if(arr[mid]==key){
//       upper = mid
//       count++
//     }
//     low = mid+1
//   }

// }

// console.log(count,lower,upper)

// let input = `13 2
// 1 1 1 1 1 1 1 1 1 1 2 2 2`

// input=input.split("\n")
//    let [n,key]=input[0].split(" ").map(Number)
//    let arr=input[1].split(" ").map(Number).sort((a,b) => a-b)
//    let lo=0
//    let hi=n-1
//    let res=findLowerBound(lo,hi,arr,key)
//    console.log(res)

// function findLowerBound(lo,hi,arr,key){
//    let ans=-1
//    while(lo<=hi){
//      console.log(arr.slice(lo,hi+1))
//        let mid=Math.floor(lo +(hi-lo)/2)
//       if(arr[mid]>=key){
//           if(key==arr[mid]){
//               ans=mid
//           }
//              hi=mid-1
//       }
//       else{
//           lo=mid+1
//       }

//    }
//    return ans
// }

// let input = `6 3
// 2 3 3 3 6 9`

// input=input.split("\n")
//     let [size,key] = input[0].split(" ").map(Number)
//     let arr= input[1].split(" ").map(Number)
//     let count=0

//     let res1=findLowerBound(arr,key)
//     let res2=lastIndex(arr,key)

//      if(res1==-1){
//          console.log(0)
//      }
//      else{
//            console.log(Math.abs(res2-res1)+1)
//      }

// function findLowerBound(arr,key){
//     var high=arr.length-1
//     var low=0
//    let ans=-1
//    while(low<=high){
//        let mid = Math.floor(low +(high-low)/2)

//     if(key==arr[mid]){
//               ans=mid
//               high=mid-1
//           }
//      else if(arr[mid]>key){
//              high=mid-1
//       }
//       else{
//           low=mid+1
//       }

//    }
//    return ans
// }

// function lastIndex(arr,key){
//   ans=-1
//   var high=arr.length-1
//   var low=0
//   while(low<=high){
//     var mid=Math.floor(low + (high - low)/2)
//     if(arr[mid]<= key){
//     	if(arr[mid] == key){
//           ans = mid
//         }
//       	low = mid + 1
//     }
//     else{
//       high = mid - 1
//       }
//     }
//     return ans
//  }

// make leaderboard

// let input = `6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45`

// input = input.split("\n")
// let size = Number(input.shift())
// let arr = input.map(elem=> elem.split(" ")).sort().sort((a,b) => ( Number(b[1]) - Number(a[1])))
// let rank = 1

// for(let i = 0 ; i < input.length ; i++){
//   if(i == 0){
//     console.log(rank + " " + arr[i][0])
//   }
//   else if (Number(arr[i][1]) == Number(arr[i-1][1])){
//     console.log(rank + " " + arr[i][0])
//   }
//   else{
//     rank = i+1
//     console.log(rank + " " + arr[i][0])
//   }
// }

// new sorting algo

// let input = `5 6
// 12 18 17 65 46`

// input  =input.split("\n")

// let [size , k] = input.shift().split(" ").map(Number)

// console.log(input)

// Q =>  Dance Night!

// let input = `3
// 4 5
// 2 5 6 8
// 3 8 5 1 7
// 6 6
// 2 5 6 8 9 2
// 3 4 8 5 1 7
// 6 5
// 2 5 6 8 9 2
// 1 4 20 1 7`

// input = input.split("\n")
//   	let tcs = Number(input.shift())

//     let line = 0
//     for(let i = 0 ; i < tcs; i++){
//       let [arr1_size,arr2_size] = input[line].split(" ").map(Number)
//       line++
//       let boooies_arr = input[line].split(" ").map(Number).sort((a,b) => a-b)
//       line++
//       let girls_arr = input[line].split(" ").map(Number).sort((a,b) => a-b)
//       line++
//       console.log(boooies_arr,girls_arr,arr1_size)
//       console.log(check(boooies_arr,girls_arr,arr1_size))
//     }

// function check (boooies_arr,girls_arr,arr1_size) {
//   for(let j = 0 ; j < arr1_size; j++){
//       if(boooies_arr[j] < girls_arr[j]){
//         return("NO")
//       }
//       console.log("boy height",boooies_arr[j], "<" ,"girl height",girls_arr[j], boooies_arr[j] < girls_arr[j])
//     }
//   console.log("we have came here")
//   return("YES")
// }

// input=input.split("\n")
//     let tcs=Number(input[0])
//     let line=1
//     for(let i=0;i<tcs;i++){
//         var [N,M]=input[line].split(" ").map(Number)
//         line++
//         var boysArr=input[line].split(" ").map(Number).sort((a,b)=>a-b)
//         line++
//         var girlsArr=input[line].split(" ").map(Number).sort((a,b)=>a-b)
//         line++
//          let res=isParty(N,M,boysArr,girlsArr)
//         console.log(res)
//     }

//    function isParty(n,m,boi,girls){
//        for(let i=0;i<n;i++){
//          console.log(i)
//                if(girls[i]<boi[i]){
//                 console.log("in if",i)
//                    return "YES"
//                }
//                else{
//                 console.log("in else",i)
//                    return "NO"
//                }
//        }
//        console.log("testCase end")
//    }

// party or not

// let input = `5 3 24
// 16 4 21 20 13`

// input = input.split("\n")
//   	let [size, to_give, total] = input[0].split(" ").map(Number)
//     let arr = input[1].split(" ").map(Number)
//     let count = 0
// 	for(let i = 0 ; i < size; i++){
//      	if(total >= arr[i]){
//           count++
//           total-=arr[i]
//         }
//     }
//   if(count >= to_give){
//     console.log("Party")
//   }
//   else{
//     console.log("Sad")
//   }

// manage brick

// let input = `4
// 40 100 20 30`

// input = input.split("\n")
//   	let size = Number(input[0])
//     let arr = input[1].split(" ").map(Number).sort((a,b)=> a-b)

//     let brick = 1
//     let x = 0
//     let i = 0
//     while(i < size){

//       i+=count
//       if(i > size){
//         break
//       }

//       x++
//       brick++

//     }

// console.log(x)

// Q => Minimize number of coins

// let input = `3
// 45
// 93
// 29`

// input = input.split("\n")
//   	let tcs = Number(input.shift())
//     for(let i = 0 ; i < tcs; i++){
//       let count = 0
//       let value = Number(input[i])

//       while(value > 0){
//         if(value >= 1000){
//           value = value-1000
//         }
//         else if (value >= 500 && value < 1000){
//           value = value-500
//           console.log("1 1000 note")
//         }
//         else if (value >= 100 && value < 500){
//           value = value-100
//           console.log("1 500 note")
//         }
//         else if (value >= 50 && value < 100){
//           value = value-50
//           console.log("1 100 note")
//         }
//         else if (value >= 20 && value < 50){
//           value = value-20
//           console.log("1 50 note")
//         }
//         else if (value >= 10 && value < 20){
//           value = value-10
//           console.log("1 10 note")
//         }
//         else if (value >= 5 && value < 10){
//           value = value-5
//           console.log("1 5 note")
//         }
//         else if (value >= 2 && value < 5){
//           value = value-2
//           console.log("1 2 note")
//         }
//         else{
//           value = value-1
//           console.log("1 1 note")
//         }
//         count++
//       }
//       console.log(count, "total")
//     }

// Q => Addition, Subtraction and its Cost

// let input = `17
// 7 4
// 92 38 62 4 48 42 55
// 51 26
// 57 31 7 15 46 76 17 18 54 73 7 66 16 36 3 17 53 29 84 40 47 23 7 76 90 18 63 70 47 76 100 79 12 33 36 23 23 34 35 39 35 11 100 8 81 36 37 87 35 53 72
// 46 32
// 69 54 32 23 29 85 91 82 44 52 81 40 78 93 9 82 9 50 60 79 43 96 79 57 18 70 50 42 5 69 34 6 72 75 39 95 21 77 53 53 3 8 52 35 2 23
// 25 7
// 81 11 91 12 77 39 6 16 59 30 87 96 12 74 32 87 63 98 5 72 79 83 8 62 65
// 55 39
// 42 99 82 8 46 2 26 2 16 69 76 30 30 39 34 5 66 60 60 13 45 79 6 31 76 34 61 82 83 45 38 34 21 44 25 69 68 91 58 61 81 31 35 2 99 10 58 40 37 19 6 60 20 24 44
// 48 41
// 12 69 53 15 28 60 49 85 68 57 28 35 6 95 94 85 26 46 86 95 56 97 57 7 46 69 2 52 41 12 80 49 83 11 4 25 71 82 41 20 20 85 90 2 5 50 91 51
// 8 2
// 90 83 69 8 79 30 85 9
// 13 1
// 8 65 48 35 76 28 68 83 96 88 83 72 4
// 22 18
// 91 53 91 35 54 11 21 67 29 40 39 26 100 64 61 44 4 71 19 99 47 39
// 72 28
// 20 31 53 42 59 43 27 12 21 81 46 39 16 28 51 48 66 34 89 15 67 35 2 92 95 83 47 41 13 72 66 76 100 10 42 46 23 15 61 64 44 27 97 74 8 34 68 41 91 15 22 53 93 33 15 31 56 32 77 14 12 95 6 4 87 63 10 88 51 46 28 71
// 76 9
// 55 44 18 27 71 3 66 87 23 12 24 79 25 80 18 74 96 15 11 47 34 49 77 32 38 51 11 53 7 56 69 60 14 77 82 89 68 97 21 54 32 25 87 17 63 71 48 69 13 39 15 89 91 30 99 19 30 47 91 40 83 24 71 36 66 66 52 25 44 99 51 91 16 19 26 43
// 34 28
// 44 48 31 7 53 1 68 80 79 36 81 21 54 27 47 54 31 37 25 94 29 23 55 34 47 11 64 82 65 37 18 56 37 44
// 7 3
// 65 15 23 42 42 65 7
// 39 23
// 90 32 74 59 15 92 78 95 59 64 65 71 62 91 98 80 2 34 3 91 61 25 4 11 83 56 72 16 20 53 68 58 56 13 52 36 57 30 92
// 15 4
// 44 72 46 96 34 80 59 60 11 63 97 71 56 49 96
// 44 28
// 38 58 55 19 97 11 74 3 41 75 56 88 38 6 48 38 43 28 65 89 99 10 17 80 22 21 50 64 42 42 24 3 85 22 92 28 16 75 12 58 32 50 4 45
// 52 46
// 85 67 47 73 28 7 24 85 2 54 15 86 77 70 42 86 1 20 68 98 24 61 40 99 58 5 65 39 33 99 88 60 28 90 63 37 47 32 17 25 94 12 87 52 69 54 41 85 40 60 23 40 `

// input = input.trim().split("\n")
//     let tcs = Number(input.shift())
//     let line = 0
//       for(let i = 0 ; i < tcs; i++){
//         let [size, total] = input[line].trim().split(" ").map(Number)
//         line++
//         let arr = input[line].trim().split(" ").map(Number)
//         line++
//         console.log(find(size,total,arr))
//       }

//   function find(size,total,arr){

//   globel_min = 1000000000000000

//   let min = Math.max(...arr)

//   for(let i = 0 ; i <= min; i++){
//     let temp_arr = []
//       for(let j = 0 ; j < size ; j++){
//         if(arr[j] > i){
//           temp_arr.push((arr[j]-i)*5)
//         }
//         else if (arr[j] < i){
//           temp_arr.push((i-arr[j])*3)
//         }
//         else{
//           temp_arr.push(0)
//         }
//       }
//       temp_arr  = temp_arr.sort((a,b) => a-b)
//     let sum = 0
//     for(let k = 0 ; k < total; k++){
//       sum+=temp_arr[k]
//     }
//     if(globel_min > sum){
//       globel_min = sum
//     }
//   }
//   return (globel_min)
// }

// Q => Manage stacks of bricks

// let input = `1
// 3
// 6
// 4
// 3 1
// 1 2
// 1 2
// `

// input = input.split("\n")

// let tcs = Number(input.shift())
// let line= 0
// for(let i = 0 ; i < tcs ; i++){
//   let size = Number(input[line])
//   line++
//   let inc = Number(input[line])
//   line++
//   let dec = Number(input[line])
//   line++
//   let j = 0
//   let arri = []
//   let arrf = []
//   while(j < size){
//     arri.push(input[line].split(" ").map(Number)[0])
//     arrf.push(input[line].split(" ").map(Number)[1])
//     j++
//     line++
//   }
//   arri = arri.sort((a,b) => a-b)
//   arrf = arrf.sort((a,b) => a-b)
//   let effort = 0
//   for(let k = 0 ; k < size; k++){
//     if(arri[k] > arrf[k]){
//       effort += (arri[k] - arrf[k])*dec
//     }
//     else if (arri[k] < arrf[k]){
//       effort += (arrf[k] - arri[k])*inc
//     }
//   }
//   console.log(effort)
// }

// Q => Steal as much as you can

// let input = `50
// 3
// 100 120 60
// 20 30 15`

// input = input.split("\n").trim()

// let total = Number(input.shift())

// let size = Number(input.shift())

// let cost = input.shift().trim().split(" ").map(Number)

// let wgt = input.shift().trim().split(" ").map(Number)

// let farr = []

// for(let  i = 0 ; i < size; i++){
//  farr.push([cost[i]/wgt[i],i])
// }
// farr = farr.sort((a,b) => b[0]-a[0])

// let outcost = 0
// let line = 0
// while(total > 0){
//    if(wgt[farr[line][1]] > total){
//     outcost += (cost[farr[line][1]]/wgt[farr[line][1]])*total
//     total = 0
//    }
//    else{
//     outcost+= cost[farr[line][1]]
//       total -= wgt[farr[line][1]]
//       line++
//    }
// }

// console.log(Math.round(outcost))

// Q => Hostel & Warden

// let input = `3
// 4 -4 2
// 4 0 5`

// input = input.trim().split("\n")

// let size = Number(input.shift())
// let student = input.shift().trim().split(" ").map(Number).sort((a,b) => a-b)
// let room = input.shift().trim().split(" ").map(Number).sort((a,b) => a-b)

// let arr = []

// for(let i = 0 ; i < size ; i++){
//   arr.push(Math.abs(student[i]-room[i]))
// }

// console.log(Math.max(...arr))

// binary search

// Q =>

// let input = `7
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 3
// 3
// 10
// 2`

// input = input.trim().split("\n").map(Number)

// let sol = input.shift()
// let sol_arr = []
// for (let i = 0; i < sol; i++) {
//   sol_arr.push(input.shift())
// }
// sol_arr = sol_arr.sort((a, b) => a - b)

// let lvl = input.shift()
// let lvl_pwr = []
// for (let j = 0; j < lvl; j++) {
//   lvl_pwr.push(input.shift())
// }

// for (l = 0; l < lvl; l++) {
//   let sol_count = 0, pwr_count = 0
//   for (k = 0; k < sol; k++) {
//     if (lvl_pwr[l] >= sol_arr[k]) {
//       sol_count++
//       pwr_count += sol_arr[k]
//     }
//     else {
//       break
//     }
//   }
//   console.log(sol_count, pwr_count)
// }

//  gargi binary serach

// let input = `6 4
// 1 2 4 5 7 8`

// input=input.split("\n")
//       let [n,target]=input[0].split(" ").map(Number)
//       let arr=input[1].split(" ").map(Number)
//      // console.log(arr,n,target)

//       let res=BinartSearch(arr,0,n-1)
//       console.log(res)

//       function BinartSearch(arr,lo,hi){
//           let mid=lo+Math.floor((hi-lo)/2)
//          if(lo<hi){
//                if(arr[mid]>target){
//               hi=mid-1
//           }
//           else if(arr[mid]<target){
//               lo=mid+1
//           }
//           else{
//               return  1
//           }
//          }

//           return -1
//       }

// lower bound - (upper bound-1)  Number of Occurences in logn

// let  input = `6 3
// 2 3 3 3 6 9`

// input = input.split("\n")

// let [size,key] = input.shift().split(" ").map(Number)

// let arr = input[0].split(" ").map(Number).sort()

// let ans_lower = -1
// let ans_upper = -1

// // lower

// let for_lower_low = 0
// let for_lower_high = size - 1

// while(for_lower_low <= for_lower_high){
//   let mid = Math.floor(for_lower_low + (for_lower_high-for_lower_low)/2)
//   if(arr[mid]>=key){ // >=
//     ans_lower = mid
//     for_lower_high = mid-1
//   }
//   else{ // <
//     for_lower_low = mid+1
//   }
// }

// // upper

// let for_upper_low = 0
// let for_upper_high = size - 1

// while(for_upper_low <= for_upper_high){
//   let mid = Math.floor(for_upper_low + (for_upper_high-for_upper_low)/2)
//   if(arr[mid]<=key){
//     for_upper_low = mid+1
//   }
//   else{ // >
//     ans_upper = mid
//     for_upper_high = mid-1
//   }
// }

// console.log(ans_lower,ans_upper)

// wood cutter

// let input = `5 20
// 20 15 10 17 50`

// input = input.split("\n")

// let [size, req] = input.shift().trim().split(" ").map(Number)

// let arr = input[0].trim().split(" ").map(Number).sort((a,b) => a-b)
// let low = 0
// let high = arr[arr.length-1]
// console.log(low,high)
// let ans = 0
// while(low <= high){
//     let mid = Math.floor(low+(high-low)/2)
//     let sum = 0
//     for(let i = 0 ; i < size ; i++){
//        if(arr[i] > arr[mid]){
//         console.log(arr[i],"-",arr[mid])
//         sum+= Math.abs(arr[i]-arr[mid])
//         console.log(sum)
//        }
//     }
//     console.log(sum)
//     if (sum>=req){
//         ans = arr[mid]
//         low = mid+1
//     }
//     else{
//         high = mid-1
//     }
// }

// console.log(ans)

// Angry Employees

// let input = `1
// 5 3
// 1
// 2
// 8
// 4
// 9`

// input = input.trim().split("\n")

// let tcs = Number(input.shift())
// let line = 0
// for(let i = 0 ; i < tcs; i++){
//     let [size , enp] = input[line].trim().split(" ").map(Number)
//     line++
//     let arr = []
//     for(let j = line ; j < line+size; j++){
//         arr.push(input[j])
//     }
//     line = line+size
//     arr = arr.sort((a,b) => a-b)
//     let  low = 0
//     let high = arr[size-1] - arr[0]

//     //[1,2,3,4,5,6,7,8]

//     while(low < high){
//         let mid = Math.ceil(low+(high-low)/2)
//         if(p(mid)){
//             low = mid
//         }
//         else{
//             high = mid-1
//         }
//     }

// ||
//mid

// [1,2,4,8,9]

//     function p(dis){
//         let last = [arr[0]]
//         let count = 1
//         for(let i = 1 ; i < size ; i++){
//             if((arr[i]-last)>=dis){
//                 last = arr[i]
//                 count++
//                 if(count == enp){
//                     return true
//                 }
//             }
//         }
//         return false
//     }

//     if(p(low)){
//         console.log(low)
//     }
//     else{
//         console.log(-1)
//     }
// }

// Coding Practice Time

// let input = `5 3
// 1 2 2 1 3`

// input = input.trim().split("\n")

// let [size,day] = input[0].trim().split(" ").map(Number)

// let arr = input[1].trim().split(" ").map(Number)

// let low =  Math.max(...arr)
// let high = arr.reduce((acc,elem) => acc+elem)

// while(low < high){
//     let mid = Math.floor(low+(high-low)/2)
//     if(p(mid)){
//         high = mid
//     }
//     else{
//         low = mid+1
//     }
// }

// if(p(high)){
//     console.log(high)
// }
// else{
//     console.log(-1)
// }

// function p(hrs){
//     let day_count = 1
//     let sum = 0
//     for(let i = 0 ; i < size ; i++){
//         sum+=arr[i]
//         if(sum > hrs){
//             i--
//             sum=0
//             day_count++
//         }
//         if(day_count > day){
//             return false
//         }
//     }
//     return true
// }

// Q => Machines at Work

// let input = `2 5
// 2 3`

// input = input.trim().split("\n")

// let [size,target] = input[0].trim().split(" ").map(Number)

// let arr = input[1].trim().split(" ").map(Number)

// let low = 0
// let high = 1000000001

// while(low < high){
//     let mid = Math.floor(low+(high-low)/2)
//     if(p(mid)){
//         high = mid
//     }
//     else{
//         low = mid+1
//     }
// }

// if(p(high)){
//     console.log(high)
// }
// else{
//     return -1
// }

// function p(day){
//     let goods_count = 0
//     for(let i = 0 ; i < size; i++){
//         goods_count += Math.floor(day/arr[i])
//     }
//     if(goods_count >= target){
//         return true
//     }
//     else{
//         return false
//     }
// }

// let input = `6 1 5
// 4 3 2 5 9 5`

// input = input.split("\n")
// let [size, x, y] = input[0].trim().split(" ").map(Number)
// let arr = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)
// let first = (lower(arr, x))
// let last = (upper(arr, y))

// console.log(Math.abs(last-first)+1)

// function lower(arr, x) {
//     let low = 0
//     let high = arr.length - 1
//     let ans = -1
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)

//         if (arr[mid] > x) {
//             ans = mid
//             high = mid - 1
//         }
//         else {
//             low = mid + 1
//         }

//     }
//     return ans
// }

// function upper(arr, y) {
//     let low = 0
//     let high = arr.length - 1
//     let ans = -1
//     while (low <= high) {
//         var mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] <= y) {
//             ans = mid
//             low = mid + 1
//         }
// //         else {
// //             high = mid - 1
// //         }
// //     }
// //     return ans
// // }

// let input = `6
// 88 24 20 4 44 23`

// input = input.trim().split("\n")

// let size = Number(input[0])

// let arr = input[1].trim().split(" ")

// let four_arr = []
// let after_arr = []

// for(let i = 0 ; i < size; i++){
//     let x = arr[i].split("")
//     let sum = 0
//     for(let j = 0 ; j < x.length; j++){
//         sum+=Number(x[j])
//     }
//     if(sum%4 == 0){
//         four_arr.push(Number(arr[i]))
//     }
//     else{
//         after_arr.push(Number(arr[i]))
//     }
// }

// console.log(four_arr,after_arr)
// four_arr = sortx(four_arr)

// after_arr = sortx(after_arr)

// function sortx(arr){
//     var start=0
//     var end=arr.length-1
//     mergeSort(arr,start,end)
// }

// function merge(arr,start,end){
//     var mid=Math.floor((start+end)/2)
//     var i=start
//     var j=mid+1
//     var k=start
//     var temp=[]

//     while(i<=mid && j<=end){
//         if(arr[i]>arr[j]){
//             temp[k++]=arr[i++]
//         }
//         else{
//             temp[k++]=arr[j++]
//         }
//     }

//     while(i<=mid){
//         temp[k++]=arr[i++]
//     }

//     while(j<=end){
//         temp[k++]=arr[j++]
//     }

//     for(var l=start;l<=end;l++){
//         arr[l]=temp[l]
//     }
//     return arr
// }

// function mergeSort(arr,start,end){
//     if(start<end){
//         var mid=Math.floor((start+end)/2)
//         mergeSort(arr,start,mid)
//         mergeSort(arr,mid+1,end)
//         merge(arr,start,end)
//     }
//     return arr
// }

// console.log(...four_arr,...after_arr)

// let input =`3
// 2 3
// 1 1
// 4 2`

// let input = `10000`
// input = Number(input)
// let out_arr = []
// out_arr.push(input)
// algo(input)
// function algo(input){
//     if(input===1){
//         return
//     }
//     else if(input%2 == 0){
//         out_arr.push(input/2)
//         return algo(input/2)
//     }
//     else{
//         out_arr.push((input*3)+1)
//         return algo((input*3)+1)
//     }
// 	}
//   console.log(...out_arr)

// let input =`6 6
// 3 4 7 9 1 2`

//   input = input.trim().split("\n")
//     let [size,key] = input[0].trim().split(" ").map(Number)

//     let arr = input[1].trim().split(" ").map(Number)
//     //let iarr = arr.map((elem,i) => [elem,i])

//     //iarr = iarr.sort((a,b) => a[0]-b[0])

//     let low = 0
//     let high = arr.length-1
//     console.log(bsearch(low,high))
//   function bsearch(low,high){
//     if (low >= high){
//         return null
//     }
//     while(low <= high){
//       let mid = Math.floor(low+(high-low)/2)
//       if(p(arr[mid])){
//         return mid
//       }
//     else{
//         bsearch(low,mid-1)
//         bsearch(mid+1,high)
//         }
//     }
//   }

//   function p(x){
//         if(arr[x] == key){
//             return true
//         }
//         else{
//             false
//         }
//   }

// let input =  "6"
// input = Number(input)
// let x =(Math.log2(input))
//   console.log(x)

// let input = `10
// jack 158 85 112
// john 168 74 124
// arti 148 65 120
// bhuvan 182 84 124
// navi 182 84 124
// vijay 175 88 115
// amit 180 89 119
// kevin 182 77 120
// rohit 174 85 100
// vivek 184 75 111`

// input = input.split("\n")

// let size = Number(input.shift())
// input = input.map(elem => elem.split(" ").map((elemx, i) => i != 0 ? Number(elemx) : elemx))

// let output = Sort(input)

// output.slice(0,8).forEach(element => console.log(element[0]))

// function Sort(input) {
//   let n = input.length
//   for (let i = 0; i < n - 1; i++) {
//     let min = i
//     for (let j = i + 1; j < n; j++) {
//       if(input[j][3] == input[min][3]){
//         if(input[j][1] == input[min][1]){
//           if(input[j][2] == input[min][2]){
//             if(input[j][0] < input[min][0]){
//               min = j
//             }
//           }
//           else if(input[j][2] < input[min][2]){
//             min = j
//           }
//         }
//         else if(input[j][1] > input[min][1]){
//           min = j
//         }
//       }
//       else if(input[j][3] > input[min][3]){
//         min = j
//       }
//     }
//     let temp = input[i]
//     input[i] = input[min]
//     input[min] = temp
//   }
//   return input
// }

// let input = `5
// 2 2 2 7 9`

// input = input.split("\n")
// let n = Number(input[0])
// let arr = input[1].split(" ").map(Number)

// for (let i = 1; i < arr.length; i++) {

//   if (arr[i]==arr[i-1]) {
//     arr.splice(i,1)
//     i--
//   }
// }

// console.log(...arr)

// let input = `6 3 -1 -3 4 -2 2 4 6`

// input = input.split(" ").map(Number)

// for(let i = 0 ; i < input.length; i++){
//   for(let j = i ; j < input.length; j++){
//     let start = i
//     let end = j
//     let sub = input.slice(i,j+1)
//     let sum = sub.reduce((acc,elem) => acc+elem)
//     if(sum == 0){
//       console.log(start,end)
//     }
//   }
// }

// let input = `5
// 1 5 4 3 2`

// input = input.split("\n")
// let size = Number(input[0])
// let arr = input[1].split(" ").map(Number)

// for (let i = 0; i < Math.floor(size / 2); i++) {
//   arr[i] = arr[i] + arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = arr[i] - arr[arr.length - 1 - i];
//   arr[i] = arr[i] - arr[arr.length - 1 - i];
// }
// console.log(...arr)

// let input = `0.0.0
// 0.0.0`

// let [v1,v2] = input.split("\n").map(elem => elem.split(".").map(Number))
// console.log(v1,v2)

//     for(let i = 0 ; i < v1.length;i++){
//       if(v1[i] < v2[i]){
//         console.log("Version 1 is the latest.")
//         break
//       }
//       else if (v1[i] > v2[i]){
//         console.log("Version 2 is the latest.")
//         break
//       }
//       else if(i == v1.length-1){
//         console.log("Both Versions are equal.")
//       }
//     }

//   let input = `racecarses`

//   input = input.trim().split("")

// let obj = {}
// 	for(let i = 0 ; i < input.length;i++){

//     let elem = input[i]

//     if(!(obj[elem])){
//       obj[elem] = 1
//     }
//     else{
//       obj[elem] = obj[elem] + 1
//     }

//   }

// let flag = false
// for(let key in obj){
//   if(obj[key] == 1){
//     console.log(key)
//     flag = true
//     break
//   }
// }

// if(flag == false){
//   console.log("Not Found")
// }

// let input = `1 2 3 4 5 6 7 8 9`

// input = input.split(" ")

// let size = Math.sqrt(input.length)

// let arr = []
// for(let i = 0 ; i < input.length; i++){

//   let row = []

//   for(let j = 0 ; j < size; j++){
//     row.push(input[i])
//     i++
//   }
//   arr.push(row)
//   i--
// }

// console.log(arr)

// let out = []

// for(let x = 0 ; x <= size-1 ; x++){
//   let out_row = []
//   for(let y = size-1 ; y >= 0 ; y--){
//     out_row.push(arr[y][x])
//   }
//   out.push(out_row)
// }
// out = out.join(",")

// console.log(out.split(",").join(" "))

// let input = `13 14 15 16 1 2 3 4 5 6 7 8 9 10 11 12`

// let input = `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25`

// input = input.trim().split(" ")
// let size = Math.sqrt(input.length)
// let out = []
// for(let i = 0 ; i < size ; i++){
//   for(let j = size-1 ; j >= 0 ; j--){
//     let x = j*size
//     out.push(input[x+i])
//   }
// }

// console.log(out.join(" "))

// let input =`4
// 1 2 3 4
// 4 2 3 1`

// let [size,list,queue] = input.split("\n")
// queue = queue.trim().split(" ").map(Number)
// list = list.trim().split(" ").map(Number)
// console.log(list,queue)
// let moves = 0

// for(let i = 0 ; i < list.length; i++){
//   for(let j = 0; j < queue.length; j++){
// 	if(queue[j] === list[i]){
//         queue.splice(j,1)
//         moves++
//         break
//       }
//     	else{
//         moves++
//       }
//   }
// }
// console.log(moves-1)

// function x (time) {
//   let t = time
// }

// linked list

// class Node{
//   constructor(element){
//     this.element = element
//     this.next = null
//   }
// }

// class linkedList{
//     constructor(){
//       this.head = null
//       this.size = 0
//     }

//     add(element){
//       var node = new Node(element)
//       if(!this.head){
//         this.head = node
//       }
//       else{
//         var current = this.head
//         while(current.next){
//           current = current.next
//         }
//         current.next = node
//       }
//       this.size++
//     }
// }

// var list = new linkedList()
// console.log(list)
// list.add(1)
// console.log(list)
// list.add(2)
// console.log(list)
// list.add(3)
// console.log(list)
// list.add(4)
// console.log(list)

// let input = `4
// aaaaaabbb
// aaabbb
// asd
// aabbcc`

// input = input.split("\n")
// let size = Number(input.shift())
// for (let i = 0; i < size; i++) {
//   let x = input[i].split("")
//   let current = ""
//   let count = 1
//   let max = 0
//   for (let j = 0; j < x.length; j++) {
//     if (current === x[j]) {
//       count++
//     }
//     else {
//       current = x[j]
//       if (max < count) {
//         max = count
//       }
//       count = 1
//     }
//   }
//   console.log(Math.max(max, count))
// }

// date = 26/11/2020
//  revision questions
//Q = Lazy Sherlock

// let input = `2
// 5
// 11 2000 51 1000 50
// 3
// 200 13 5000`;

// input = input.split("\n");
// let tcs = Number(input[0]);
// let line = 1;
// for (let i = 1; i <= tcs; i++) {
//   let size = Number(input[line++]);
//   let arr = input[line++].split(" ").map(Number);
//   arr = arr.sort((a, b) => a - b);
//   let min = 2000;
//   let min_index = null;
//   for (let j = 0; j < size; j++) {
//     let current = domination(arr[j]);
//     if (current < min) {
//       min = current;
//       min_index = j;
//     }
//     // else if (current === min){
//     //     if(arr[min_index] > arr[j]){
//     //         min = current;
//     //         min_index = j;
//     //     }
//     // }
//   }
//   console.log(arr[min_index]);
// }

// function domination(input) {
//   let count = 0;

//   while (input !== 0) {
//     if (input >= 2000) {
//       input -= 2000;
//       count += 1;
//     } else if (input < 2000 && input >= 500) {
//       input -= 500;
//       count += 1;
//     } else if (input < 500 && input >= 200) {
//       input -= 200;
//       count += 1;
//     } else if (input < 200 && input >= 100) {
//       input -= 100;
//       count += 1;
//     } else if (input < 100 && input >= 50) {
//       input -= 50;
//       count += 1;
//     } else if (input < 50 && input >= 20) {
//       input -= 20;
//       count += 1;
//     } else if (input < 20 && input >= 10) {
//       input -= 10;
//       count += 1;
//     } else if (input < 10 && input >= 5) {
//       input -= 5;
//       count += 1;
//     } else if (input < 5 && input >= 2) {
//       input -= 2;
//       count += 1;
//     } else {
//       input -= 1;
//       count += 1;
//     }
//   }
//   return count;
// }

// let input = `4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8`;

// input = input.split("\n");
// var arr = [];
// var rows = Number(input[0][0]);
// var cols = Number(input[0][0]);
// var item = 0;
// for (var i = 1; i <= rows; i++) {
//   arr[item] = input[i].split(" ").map((ele) => parseInt(ele));
//   item++;
// }

// function spiral(matrix){
//     var list= [];

//     while(matrix.length>1){

//       //Right
//       list= list.concat(matrix.splice(0,1)[0]);

//       //Down
//       for(var idx in matrix){
//         list.push(matrix[idx].splice(-1)[0]);
//       }

//       //Left
//       list= list.concat(matrix.splice(-1,1)[0].reverse());

//       //Up
//       for(var idx=matrix.length-1;idx>=0;idx--){
//         list.push(matrix[idx].splice(0,1)[0]);
//       }

//     }

//     if(matrix.length>0){
//         list.push(matrix.pop()[0]);
//     }

//     return list;
//   }

//   console.log(spiral(arr))

// const matrix = (n) => {
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }
//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     // Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return results;
// };
// console.log(arr)
// console.log(matrix(arr))

//

//   console.log(spiralTraversal(arr))

// marge sort

// function runProgram(input){
//     input = input.split("\n")
//   	let size = Number(input.shift())
//     let arr = input[0].split(" ").map(Number)

//     let start = 0
//     let end = arr.length - 1
//     let res = merge_Sort(arr,start,end)
//       console.log(res.join(" "))
// }

// function merge_Sort(arr,start,end){
//       if(start < end){
//         let mid = Math.floor((start+end)/2)
//         merge_Sort(arr,start,mid)
//         merge_Sort(arr,mid+1,end)
//         merge(arr,start,end)
//       }
//       return arr
//     }

// function merge(arr,start,end){
//       let mid = Math.floor((start+end)/2)
//       let i = start
//       let j = mid + 1
//       let k = start
//       let temp = []
//       while(i <= mid && j <=end){
//         if (arr[i] > arr[j]){
//           temp[k++] = arr[i++]
//         }
//         else {
//           temp[k++] = arr[j++]
//         }
//       }
//       while(i <= mid){
//         temp[k++] = arr[i++]
//       }
//       while(j <= end){
//         temp[k++] = arr[j++]
//       }
//       for(let z = start; z <= end; z++){
//         arr[z] = temp[z]
//       }
//       return arr
//     }

// Q => good pairs

// let input = `2
// 5
// 1 1 1 1 1
// 6
// 1 1 2 2 4 1`

//     input=input.split("\n")
//     var test_cases=Number(input[0])
//     for(var k=1;k<test_cases*2;k+=2){
//         var n=Number(input[k])
//         var arr=input[k+1].split(" ").map(Number).sort((a,b) => a-b)
//         // console.log(n,arr)
//         var count=0
//         for(var i=0;i<arr.length;i++){
//             for(var j=i+1;j<arr.length;j++){
//                 if(arr[j] == 2*arr[i]){
//                     count++
//                 }
//             }
//         }
//         console.log(count)
//     }

// function foo(){
//     var a = 10
//     b = 100
// }

// foo()

// //console.log(a)
// // output
// console.log(b)
// // output

// function foo(){
//     var a = 10
//     // b = 100
// }

// foo()

// console.log(a)
// // output
// // console.log(b)

// let input = `2
// 2
// 1 2
// 10
// 884 729 768 201 266 494 597 328 705 287`;

// input = input.split("\n");
// let tcs = Number(input.shift());
// let line = 0;
// for (let i = 0; i < tcs; i++) {
//   let size = input[line];
//   line++
//   let arr = input[line].split(" ").map(Number);
//   line++
//   find(size, arr);
// }

// function find(n, arr) {
//   let total = 0;
//   if (n < 3) {
//     console.log(-1);
//   } else {
//     for (let i = 1; i < n - 1; i++) {
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//         total++;
//       }
//     }
//     console.log(total);
//   }
// }

// let input = `3
// 5
// RLRUD
// 4
// LRUD
// 8
// LLUAAR`;

// input = input.split("\n");
// let tcs = Number(input.shift());
// let line = 0;
// for (let i = 0; i < tcs; i++) {
//   let size = input[line++];
//   let arr = input[line++].trim().split("");
//   find(size, arr);
// }

// function find(n, arr) {
//   let xaxis = 0;
//   let yaxis = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] === "L") {
//       xaxis -= 1;
//     } else if (arr[i] === "R") {
//       xaxis += 1;
//     } else if (arr[i] === "U") {
//       yaxis += 1;
//     } else if (arr[i] === "D") {
//       yaxis -= 1;
//     }
//   }

//   if (xaxis === 0 && yaxis === 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }

// }

// let input = `2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12`;

// input = input.split("\n");
// let tcs = Number(input.shift());
// let line = 0;
// for (let i = 0; i < tcs; i++) {
//   let [row, col] = input[line].split(" ").map(Number);
//   let arr = [];
//   line++;
//   for (let j = 0; j < row; j++) {
//     arr.push(input[line].trim().split(" "));
//     line++;
//   }
//   print(row, col, arr);
// }

// function print(row, col, arr) {
//     let left = 0, right = col-1, top = 0, bottom = row-1
//     let ans = []
//     while(left <= right && top <= bottom){
//         for(let i = top; i<=bottom; i++){
//             ans.push(arr[i][left])
//         }
//         left++
//         for(let i=left; i<=right; i++){
//             ans.push(arr[bottom][i])
//         }
//         bottom--
//     }
//     console.log(ans.join(" "))
// }


// let i = 0
// while(i < 100)  {
//         if (i % 15 == 0) {
//           i = i * 5
//         }
//         i = i + 2
// } 
// console.log(i)


// let A =  [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
// let B = [[],[],[],[]]
//      for (let i = 0; i < A.length; i++){
//         for (let j = 0; j < A.length; j++){
           
//             B[i][j] = A[j][i]
//         }         
//      }
            


// for (i = 0; i < A.length; i++){
//         for (j = 0; j < A.length; j++){
//             console.log(B[i][j]) 
//     }
// }  
    
    

// n = 2
//    let x = []
//     x.push(17)
//     x.push(21)
//     while (n != 5){
//         x.pop()
//         n ++
//     }
//     console.log(x.length)





// let input = `4
// 5 3 1 9 
// 100 101 102 105 
// 10 20 15 14 
// 101 101 101 3`



// input = input.split("\n")
// let tcs = Number(input.shift())
// for(let i = 0 ; i < tcs ; i++){
//     let arr = input[i].split(" ").map(Number)
//     let tr = arr.pop()
//     find(tr,arr)
// }

// function find(tr,arr){

// }

let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}