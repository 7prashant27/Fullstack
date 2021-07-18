let arr = [1,2,3,4,5,6]

console.log(arr.filter(e => e%3 == 0).map(ele => ele*ele*ele).reduce((a,elem) => a+elem,0))