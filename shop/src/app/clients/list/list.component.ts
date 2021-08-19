import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getClients();
  }


  getClients(){
    this.api.getClientsList().subscribe((res:any)=>{
      console.log(res);
      this.clients = res;
      
    },(err)=>{
      alert("Something went wrong");
    })
  }

}
