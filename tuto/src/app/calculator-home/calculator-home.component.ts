import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator-home',
  templateUrl: './calculator-home.component.html',
  styleUrls: ['./calculator-home.component.css']
})
export class CalculatorHomeComponent implements OnInit {

  transactions = [];

  constructor(private cal:CalculatorService) { }

  ngOnInit(): void {
    this.transactions = this.cal.getAllTransactions(); 

  }


  delete(id){
    console.log(id);

    this.cal.deleteTransactionById(id)

    
    
  }

}
