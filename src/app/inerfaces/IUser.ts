export interface IUser{
    uuid:string;
    name:string;
    lastName: string;
    email:string;
    password: string;
}

export interface IUserCreate extends Omit<IUser, 'uuid'>{}