import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;

  update = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    code: new FormControl('',Validators.required),
  })
  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProduitById();
  }

  getProduitById(){
    this.api.getProduitById(this.id).subscribe((res:any)=>{
      console.log(res);

      this.update.setValue({
        name: res.name,
        price: res.price,
        code: res.code == null ? '':res.code.code,
        
      })
      
    })
  }




  save(){
    let data = {
      "name":this.update.value.name,
      "price":this.update.value.price,
      "category_id":99,
      "code":this.update.value.code,
  }
    
    this.api.updateProduit(data,this.id).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/produits')
      
    })

  }
}
