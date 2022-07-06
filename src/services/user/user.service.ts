import BaseService from '../base.service';
import { UserRepository } from '../../repositories/user/user.repository';

export class UserService extends BaseService {
    constructor(private readonly userRepository: UserRepository){
        super(userRepository);
    }
}