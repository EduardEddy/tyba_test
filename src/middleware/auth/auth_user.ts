import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserInterface } from '../../interfaces/user.interface';

class AuthUserMiddleware {
    verifyAuth=(req:Request,res:Response,next:NextFunction)=>{
        if( !req.headers.authorization ){ return res.status(403).json({message:'token not provider'}); }
        const token = req.headers.authorization.split(' ')[1];
        
        try {
            jwt.verify(token,process.env.PRIVATE_KEY||'TRY-TO-TEST');
            const user: UserInterface = jwt.decode(token) as UserInterface;
            req.user = user;
            next();
        } catch (error) {
            return res.status(403).json({message:'invalid_token'});
        }
    };
}

export default AuthUserMiddleware;