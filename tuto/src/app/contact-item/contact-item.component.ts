import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact:any; 
  
  date = new Date();

  canShowDate = false

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact);
    
  }

  showDate(){
    this.canShowDate = ! this.canShowDate;
  }

}
