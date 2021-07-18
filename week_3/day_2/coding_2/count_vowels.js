function program(input) {
    // input
    // write code here
    var count = 0
    for (var i = 0 ; i < input.length ; i++){
        if (input[i] == "a" || input[i] == "e" || input[i] == "i" || 
            input[i] == "o" || input[i] == "u" || input[i] == "A" || 
            input[i] == "E" || input[i] == "I" || input[i] == "O" || input[i] == "U"){
                count += 1
            }
    }
    return(count)

}


module.exports = program