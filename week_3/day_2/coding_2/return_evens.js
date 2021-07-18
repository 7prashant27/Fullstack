function program(input) {
    // input
    // write code hereinput= input.split(" ")
input=Number(input)
var x="0"
for (var i=1;i<=input;i++){
    if(i%2==0){
        x+="\n"+i
    }
    if(x==0){
        return(0)
    }
    else{
        return (x)
    }     
    }
}
module.exports = program