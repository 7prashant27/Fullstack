let arr = ["abca","efga","aijklma","qwerty"]

console.log(arr.filter(e => e.length%2 != 0).reduce((a,elem)=> a+elem.length,0))