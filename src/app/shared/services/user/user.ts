import { Injectable } from '@angular/core';
import { IUser, IUserCreate } from 'src/app/inerfaces/IUser';
import { Storage } from '../../providers/storage/storage';
import { Uuid } from '../../providers/uuid/uuid';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private readonly storageSrv: Storage,
     private readonly uuidSrv : Uuid 
    
    ) {}
  
  register(User : IUserCreate): IUser{
    const users = this.storageSrv.get<IUser[]>('users') || [];
    const isEmailExist = users ?.find((u) => u.email == User.email);
    if(isEmailExist){
    throw new Error ("Email already registered")
    }
    const newUser : IUser = {
      uuid: this.uuidSrv.get(),
      ...User,
      password : atob(User.password),
    };
    users.push(newUser);
    this.storageSrv.set('users', JSON.stringify(users));

    return newUser;

  }
}
