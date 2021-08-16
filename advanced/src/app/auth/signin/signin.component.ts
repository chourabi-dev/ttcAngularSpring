import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  auth = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    const username = this.auth.value.username;
    const password = this.auth.value.password;


    // HTTP Request POST /auth/login

    if (username=== 'admin' && password==='admin') {
      // connected !!
      // token qs1q1q21sq5s6q2q62sq3sq3s2q2s3q2sq6s5qs5s6sqs1
      localStorage.setItem('ttc-access',new Date().getTime().toString());

      // redirect to home
      this.router.navigateByUrl('/home')


    }else{
      alert("wrong username or password");
    }
    
  }



}
