class notFound  extends Error {
     statusCode: number

     constructor(message: string, statusCode: number = 400) {
         super(message)
         this.statusCode = statusCode
     }

}
class forbidden  extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'Insufficient permission', statusCode: number = 404) {
          super()
          this.message = 'Insufficient permission' ;
          this.statusCode = 403
     }
}
class jwtMalformed  extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'jwt malformed', statusCode: number = 401) {
          super()
          this.message = 'jwt malformed';
          this.statusCode = 401
     }
}
class missingBearer extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'Missing bearer token' , statusCode: number = 401) {
          super()
          this.message = 'Missing bearer token';
          this.statusCode = 401
     }
}
class invalidSignature  extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'invalid signature' , statusCode: number = 404) {
          super()
          this.message = 'invalid signature';
          this.statusCode = 404
     }
}
class userNotValid extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'Invalid credentials' , statusCode: number = 404) {
          super()
          this.message = 'Invalid credentials';
          this.statusCode = 401
     } 
}
class ErrorTest extends Error {
     message: string;
     statusCode: number;

     constructor(message:string  , statusCode: number = 401) {
          super()
          this.message = message;
          this.statusCode = statusCode
         
     }
}
class timeInvalide extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'time' , statusCode: number = 409) {
          super()
          this.message = 'Invalid hour, available times are 8AM to 18PM';
          this.statusCode = 400
     }  
}
class dayInvalid extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'time' , statusCode: number = 409) {
          super()
          this.message = 'Invalid date, work days are monday to friday';
          this.statusCode = 400
     }  
}
class scheduleInvalid extends Error {
     message: string;
     statusCode: number;

     constructor(message:string = 'time' , statusCode: number = 409) {
          super()
          this.message = 'User schedule to this real estate at this date and time already exists';
          this.statusCode = 409
     }  
}
class Exists extends Error {
     message: string;
     statusCode: number;
     constructor(message:string = 'Text', statusCode: number = 409) {
          super()

          switch (message) {
                    case "Email":
                         this.message = 'Email already exists' ;
                         this.statusCode = 409;
                    break;
                    case "Category":
                         this.message = 'Category already exists' ;
                         this.statusCode = 409;
                    break;
                    case "Adress":
                         this.message = 'Address already exists' ;
                         this.statusCode = 409;
                    break;
                    case "Schedule":
                         this.message = "Schedule to this real estate at this date and time already exists" ;
                         this.statusCode = 409;
                    break;
          
               default:
               break;
          }
}
}

export { 
     notFound,           forbidden,          scheduleInvalid,       
     userNotValid,       jwtMalformed,       missingBearer,      
     invalidSignature,   ErrorTest,          timeInvalide,       
     dayInvalid,          Exists
}
