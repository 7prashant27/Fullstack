function program(input,char) {
    // input, char
    // write code here
    input= input.split(" ")
    var x=input[0]
    for(var i=1;i<input.length;i++){
        x+=char+input[i]
    }
return x
    
}


module.exports = program