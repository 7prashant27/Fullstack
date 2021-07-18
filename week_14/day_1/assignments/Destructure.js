// 1
// destructure the name and password from
let obj = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }

console.log({name, password}) = obj 

// 2
// destructure the pincode and rename to pin

let obj2 ={  name: 'masai', address: {  pincode: 560095 }  }

console.log({pincode:pin}) = obj2.address
// 3
// destructure the first value and second value of the array

let arr1 = [ 100, 200, 500, 600 ] 

console.log(a,b) = arr1

// 4
// destructure to get the value 50 from this array

var new_arr=[ 100, [  50, 60, 70  ]   ] 

const [elem1,[elem2]]=new_arr
console.log(elem2)

// 5
// destructure to get the value 2,3 into a new array
var arr2=[  1, {  
    arr3: [ 1, 2, 3 ]
  }
]
const [one,{arr3:[elem1,elem2,elem3]}]=arr2
console.log(elem2,elem3)

