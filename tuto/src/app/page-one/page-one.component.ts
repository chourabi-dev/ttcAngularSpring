import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  ammountForm = new FormGroup({
    ammount: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
    console.log(this.ammountForm);
    
  }

}
