import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add = new FormGroup({
    fullname: new FormControl('',Validators.required),
    code: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    
  })
  constructor(private api :ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    const value = this.add.value;
    this.api.addNewClient(value).subscribe((res)=>{
      this.router.navigateByUrl('/clients')
    },(err)=>{
      alert('Something went wrong')
    })

  }
}
