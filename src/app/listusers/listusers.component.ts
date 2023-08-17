import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  list:number[]=[1,2,3]

  listusr:user[]=[]
  constructor(private userserv:UserService)
  {

  }
   ngOnInit():void
{

  this.userserv.getAllusers().subscribe(

    (tab)=>{

      this.listusr=tab
    }
  )
  
}


}
