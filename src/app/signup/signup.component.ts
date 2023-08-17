import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  forminput!:FormGroup;

  us!:user;
  constructor( private fb: FormBuilder, private userserv:UserService)
  {

  }
  ngOnInit(): void {
    
    this.forminput= this.fb.group(

      {
        
        'fname':['', Validators.required],
        'lname':['', Validators.required],
        'email':['', Validators.required],
        'pwd':['', Validators.required],
        'adr':['', Validators.required],
        
    
    }
    )
  }

  register()
  {
   let usr = new user()  

   usr.firstname= this.forminput.controls['fname'].value
   usr.lastname= this.forminput.controls['fname'].value
   usr.email= this.forminput.controls['fname'].value
   usr.pwd= this.forminput.controls['fname'].value
   usr.adr= this.forminput.controls['fname'].value
   
    //console.log(this.forminput.controls['fname'].value)
  /* this.userserv.register(usr).subscribe(

    (u)=>{

      this.us=u
    }
   )*/
     // console.log(this.us.firstname)
  }

  
}
