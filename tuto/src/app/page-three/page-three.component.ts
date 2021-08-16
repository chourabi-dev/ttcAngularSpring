import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  final;
  transaction ;
  constructor(private route:ActivatedRoute, private calculator:CalculatorService,private router:Router) { }

  ngOnInit(): void {
 
    
    let t = {
      id:null,
      oldAmount: this.route.snapshot.params.oldAmount,
      bills: this.route.snapshot.params.bills,
      result:0
    };

    


    // operation 
    t.result = (Number.parseInt(t.oldAmount) - Number.parseInt(t.bills));

    this.final = t.result;
    
    this.transaction = t;
    




  }


  save(){
    this.calculator.addNewTransaction(this.transaction);
    this.router.navigateByUrl('/home');
    
  }
}
