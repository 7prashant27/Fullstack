function program(input,char) {
    var arr=[]
    var temp=""
    for(var i=0;i<input.length;i++){
        if(input[i]===char){
            arr[arr.length]=temp
            temp='';

        }
        else{
            temp=temp+input[i]
        }
        if(i===input.length-1){
            arr[arr.length]=temp
        }

    }
    return (arr)
}


module.exports = program