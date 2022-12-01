import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService, private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]],
      });
}
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.valid) {
    let payload ={
      Email : this.loginForm.value.email,
      Password : this.loginForm.value.password,
      service:'advance'
    }
    this.user.Login(payload).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem("token",response.data)
      this.router.navigateByUrl('/dashboard/notes')
    })
    this.snackBar.open("Login Sucess",'',{duration:3000});
  }
}
}
