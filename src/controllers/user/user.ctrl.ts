import { Response, Request } from 'express';
import { User } from '../../models/user';
import { UserRepository } from '../../repositories/user/user.repository';
import { UserService } from '../../services/user/user.service';
import bcrypt from 'bcrypt';

export class UserCtrl {
    private userService:UserService;
    constructor() {
        this.userService = new UserService( new UserRepository(User) );
    }

    create = async (req:Request, res:Response) => {
        const body = req.body;
        body.password = await bcrypt.hash(body.password,10);
        const user = await this.userService.create(body);
        return res.status(user.status).json({message:user.message});
    };
}