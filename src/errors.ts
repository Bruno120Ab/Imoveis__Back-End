import { ZodError } from 'zod';

import { NextFunction, Request, Response } from 'express';

import { 
    invalidSignature,   missingBearer,      notFound,
    jwtMalformed,       forbidden,          dayInvalid, 
    userNotValid,       ErrorTest,          timeInvalide,      
    scheduleInvalid,    Exists
 } from './class/errors';

const handleErros = (err: Error, req: Request, res: Response, next: NextFunction) => {
     if (err instanceof invalidSignature) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof notFound) return res.status(err.statusCode).json({ message: err.message });
     
     if (err instanceof missingBearer) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof jwtMalformed) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof forbidden) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof userNotValid) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof timeInvalide) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof dayInvalid) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof scheduleInvalid) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof Exists) return res.status(err.statusCode).json({ message: err.message });

     if (err instanceof ErrorTest) return res.status(err.statusCode).json({ message: err.message });
     
     if (err instanceof ZodError) return res.status(400).json({ message: err.flatten().fieldErrors });

    console.log(err)

    return res.status(500).json({message: 'Internal server error'})
}

export default handleErros;

