function program(input) {
    // input
    // write code here
    input=input.split(" ")
    var x=Number(input[0])
    var y=Number(input[1])
    var out=x
    for (var i=x+1;i<y;i++){
        out+='\n'+i
    }
    return out
}


module.exports = program