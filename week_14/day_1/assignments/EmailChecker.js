const checkForAt = email => email.split("@").length === 2

const allowedChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-."

const allowedtld = ["net", "org","com","in","eu","edu"]

const checkIfAllowed = name => {
    for(let i = 0; i < name.length; i++){
        if(allowedChar.indexOf(name[i]) === -1){
            return false
        }
    }
    return true
}

const checkName = name => {

    // empty name
    if(name.length === 0){
        return false
    }

    // cannot start with dot
    if(name[0] === "."){
        return false
    }

    //double dots
    if(name.indexOf("..") !== -1){
        return false
    }

    // check allowed chars
    if(!checkIfAllowed(name)){
        return false
    }

    return true
}

const checkTld = (domain) => {

    // cannot be empty
    if(domain.length == 0){
        return false
    }
    // cannot stear with dot
    if(domain[0] === "."){
        return false
    }


    // allowed stringss
    if(!checkIfAllowed(domain)){
        return false
    }

    //tld validation
    let tld = domain.split(".")
    tld = tld[tld.length-1]
    if(allowedtld.indexOf(tld) === -1){
        return false
    }

    return true
}
 

const emailChecker = (email) => {

    if(!checkForAt (email)){
        return false
    }

    let [name,domain] = email.split("@")

    if (!checkName(name)){
        return false
    }

    if (!checkTld(domain)){
        return false
    }

    return true
}






let test = `mysite@masaischool.com
my.name@masaischool.org
mysite@masai.school.net
masai.school.com
masai@.com
@masai.school.net
name@gmail.b
name@.org.org
.name@masaischool.org
masaischool()*@gmail.com
name..1234@yahoo.com`.split("\n").map(emailChecker)

console.log(test)