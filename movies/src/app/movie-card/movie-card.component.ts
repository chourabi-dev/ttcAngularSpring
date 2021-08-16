import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() id:any;
  @Input() photoURL:any;
  @Input() title:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
