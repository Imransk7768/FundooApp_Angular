import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPwdForm!: FormGroup;
  submitted = false;
  token:any; 

  constructor(private formBuilder:FormBuilder, private user:UserService, private activeRoute:ActivatedRoute) {}   

  ngOnInit()  
  {
    this.resetPwdForm=this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]],
      confirmPassword: ['', [Validators.required,Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  get f() { return this.resetPwdForm.controls; }
  onSubmit() {
    // this.reset = true;
     if (this.resetPwdForm.valid) {
      //console.log(this.resetPwdForm.value)
       let payload = {
         password: this. resetPwdForm.value.password,
         confirmPassword: this.resetPwdForm.value.confirmPassword,
         service: "advance"
 
       }
       //console.log(payload)
       this.user.Resetpassword(payload,this.token).subscribe((Response: any) => {
       //console.log(Response)
       //localStorage.getItem("token")
       })
      }
  }
}
