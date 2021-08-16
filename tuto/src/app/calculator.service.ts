import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private transactions = [
    {
      id:1,
      oldAmount:18000,
      bills:900,
      result:11200
     },
     {
      id:2,
      oldAmount:18000,
      bills:900,
      result:11200
     },
     
 
  ];

  constructor() { }


  getAllTransactions(){
    return this.transactions; // http http://localhost:8080/transctaion/list GET
  }

  addNewTransaction(data){
    data.id = this.transactions.length +1;
    this.transactions.push(data); // http://localhost:8080/transctaion/add POST
  }

  deleteTransactionById(id){
    for (let i = 0; i < this.transactions.length; i++) {
      const t = this.transactions[i];

      if (t.id == id) {
        //?
        this.transactions.splice(i,1);
      }
      
    }
  }


}
