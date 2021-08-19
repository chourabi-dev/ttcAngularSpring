import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getClientsList(){
   return this.http.get(environment.api+'/clients/list');
  }

  addNewClient(data){
    return this.http.post(environment.api+'/clients/add',data);
  }



  /************************** */

  addNewCode(data){
    return this.http.post(environment.api+'/codes/add',data);
  }

  addNewProduit(data){
    return this.http.post(environment.api+'/produit/add',data);
  }

  getProductsList(){
    return this.http.get(environment.api+'/produit/list');
   }
  
   getProduitById(id){
    return this.http.get(environment.api+'/produit/details/'+id)
   }


   updateProduit(data,id){
    return this.http.post(environment.api+'/produit/update/'+id,data)
   }

   getListCategories(){
     return this.http.get(environment.api+'/categories/list');
   }
   


   deleteProduit(id){
    return this.http.delete(environment.api+'/produit/delete/'+id)
   }

}
