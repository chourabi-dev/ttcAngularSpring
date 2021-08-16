import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator-table',
  templateUrl: './calculator-table.component.html',
  styleUrls: ['./calculator-table.component.css']
})
export class CalculatorTableComponent implements OnInit {

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
