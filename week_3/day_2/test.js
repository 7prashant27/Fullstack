/* /* function program(input) {
    // input
    // write code here
    // return output
    x=input
    for (var i = input-1; i >=0; i--) {
    // return output
    
    x +="\n"+i

    }
    
    if (input == 0){
        x='0'}
    return(x)

}
console.log(program(10))
 */
/* function program(input, n) {
    // input
    // write code here
    var out=input
    
    if(n===0){
        out="nothing"
    }

    else{
        for(var i=0;i<n-1;i++){
            out+="\n"+input
        }
    }
return out

}
var op=program("masai",0)
console.log(op) */
/* function program(input) {
    // input
    // write code here
    input= input.split(" ")
    var x = Number(input[0])
    for (var i = Number(input[0])+1; i < Number(input[1]);i++){
        x +="\n"+i
    }
    return(x)
}

var op=program("hello")
/* /* /* console.log(op) */
/* var x="hello"
console.log(x.split(" ")) */

function number(input){
    input=input.split("\n")
    input=input[1].split(" ").map(Number)
    var count=0
    for(i=0;i<input.length;i++){
        if(input[i]<0){
            count+=1
        }
        
         }
         console.log(count)
    }

