import { Request, Response } from 'express';
import { User } from '../../models/user';
import LoginService from '../../services/auth/login.service';
import LoginRepository from '../../repositories/auth/login.respository';

class LoginCtrl {
    _loginService:LoginService;
    constructor(){
        this._loginService = new LoginService( new LoginRepository(User) );
    }

    auth = async (req:Request, res:Response)=>{
        const {body} = req;   
        const user = await this._loginService.login(body.email, body.password);
        const data = user.data;
        return res.status(user.status).json( data  ?? {message:user.message});
    };
}

export default LoginCtrl;
