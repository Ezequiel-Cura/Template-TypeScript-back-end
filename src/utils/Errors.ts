

class CustomError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number = 500) {
      super(message); // Call the Error constructor
      this.name = this.constructor.name; // Set the name of the error to the class name
      this.statusCode = statusCode; // Set the statusCode property
      Object.setPrototypeOf(this, CustomError.prototype); // Set the prototype explicitly
    }
}


export default CustomError