
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    // Error is parent class which is a built in js class to create custom error objects
    // "super(message)" is calling the parent class constructor and passing it the message argument. This is used to set the error message of the object
    this.statusCode = statusCode;
  }
}


// creating instance/object of CustomAPIError class by invoking the CustomAPIError constructor and passing msg and statusCode as arguments 
const CreateCustomError = (msg, statusCode) =>{
    return new CustomAPIError(msg,statusCode)
}


module.exports = {CreateCustomError, CustomAPIError}