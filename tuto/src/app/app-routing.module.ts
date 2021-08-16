import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { CalculatorTableComponent } from './calculator-table/calculator-table.component';
import { CalculatorTotalComponent } from './calculator-total/calculator-total.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:CalculatorHomeComponent , children:[
    { path:'', redirectTo:'data', pathMatch:'full' },
    { path:'data', component:CalculatorTableComponent },
    { path:'total', component:CalculatorTotalComponent },
    
  ] },
  { path:'one', component:PageOneComponent },
  { path:'two/:number', component:PageTwoComponent },
  { path:'three', component:PageThreeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
