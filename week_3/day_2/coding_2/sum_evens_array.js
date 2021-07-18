function program(input) {
    // input
    // write code here
    input= input.split(" ")
    var sum=0
    for (var i = 0; i < input.length; i++)
        if (Number(input[i])%2==0){sum += Number(input[i])}
    return(sum)
}


module.exports = program