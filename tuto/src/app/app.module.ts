import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HideemailPipe } from './hideemail.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { CalculatorHomeComponent } from './calculator-home/calculator-home.component';
import { CalculatorTableComponent } from './calculator-table/calculator-table.component';
import { CalculatorTotalComponent } from './calculator-total/calculator-total.component';

@NgModule({
  declarations: [
    AppComponent,
    HideemailPipe,
    NavbarComponent,
    ContactItemComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    CalculatorHomeComponent,
    CalculatorTableComponent,
    CalculatorTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
