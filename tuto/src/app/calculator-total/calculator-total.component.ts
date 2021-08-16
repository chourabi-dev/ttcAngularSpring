import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator-total',
  templateUrl: './calculator-total.component.html',
  styleUrls: ['./calculator-total.component.css']
})
export class CalculatorTotalComponent implements OnInit {

  total = 0;

  constructor(private cal:CalculatorService) { }

  ngOnInit(): void {
    let ts = this.cal.getAllTransactions();

    ts.forEach((t)=>{
      this.total+=t.result;
    })
  }

}
