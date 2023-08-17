import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vartest="bonjour"
  propbind="background-color: red;"

  nametest="aaaaaa"

  counter=0;
  constructor(private userserv:UserService)
  {

  }

ngOnInit(): void {
    
}
incrimenter()
{
  this.userserv.incrimenter()
  this.counter=this.userserv.counter;
}
}
