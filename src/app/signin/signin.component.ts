import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  forminput!:FormGroup
constructor( private fb:FormBuilder, private route:Router)
{

}

ngOnInit(): void {
    
  this.forminput=this.fb.group(
    {
      "email":["",[Validators.required, Validators.email]],
      "password":["",Validators.required]
    
    }
  )
}

  onsubmit()
  {
      console.log("test submit !!!!")

      console.log(this.forminput)
     console.log(this.forminput.controls)
    //  console.log(this.forminput.controls["email"].errors)
     console.log(this.forminput.valid)

    if(this.forminput.valid)
    {
      this.route.navigate(["/"])
    }

  }
}
