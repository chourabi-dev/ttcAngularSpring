import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  update = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    code: new FormControl('',Validators.required),
    category_id: new FormControl('',Validators.required)
  })


  categories = [];


  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void { 
    this.api.getListCategories().subscribe((categories:any)=>{
      this.categories = categories;
    })
  }

 



  save(){
    let data = {
      "name":this.update.value.name,
      "price":this.update.value.price,
      "category_id":this.update.value.category_id,
      "code":this.update.value.code,
    }
    
    this.api.addNewProduit(data).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/produits')
      
    })

  }
}

 