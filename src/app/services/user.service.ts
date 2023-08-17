
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from '../models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  items= new BehaviorSubject(0);

  counter=0;

  constructor(private httpclt:HttpClient) {

    this.items.subscribe(

      (x)=>{

        this.counter=x
      }

    )
   }

  incrimenter()
  {
    this.items.next(this.items.getValue()+1)
  }

 /* register(usr:user):Observable<user>
  {

   return this.httpclt.post<user>("http://localhost:3000/users/",usr)
  }*/

  getAllusers():Observable<user[]>
  {
    return this.httpclt.get<user[]>("http://localhost:3000/users")
  }

}
