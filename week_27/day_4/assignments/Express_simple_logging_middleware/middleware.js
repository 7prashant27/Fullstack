let counter = 0

const logger = (req, res, next) => {
    counter++
    console.log("total request : "+ counter);
    next();
  };
  
  const iplogger = (req, res, next) => {
    console.log({user : req.ip, timestamp : Date() })
    next();
  };
  
  module.exports = { logger, iplogger };
  
  