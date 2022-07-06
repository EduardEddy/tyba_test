import BaseRepository from '../base.repository';

class LoginRepository extends BaseRepository {
    _user:any;
    constructor(user:any) {
        super(user);
        this._user = user;
    }

    login = async(email:string)=>{
        return this._user.findOne({
            where: { 
                'email': email
            }
        });
    };
}

export default LoginRepository;