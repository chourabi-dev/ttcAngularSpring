import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Constants from 'src/app/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  const = new Constants();
  produits = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.api.getProductsList().subscribe((res:any)=>{
      this.produits = res;
    })
  }

  delete(id){
    if (confirm('do you really want to delete this product ?')) {
      this.api.deleteProduit(id).subscribe((res)=> this.getAllProducts())
    }
  }



}
