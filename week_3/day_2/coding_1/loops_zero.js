function program(input) {
    // input
    // write code here
    // return output
    var x=input
    for (var i=input-1 ; i>=0 ;i--){
        x+="\n"+i
    }
    if(input==0){
        x="0"
    }
    return x

}


module.exports = program