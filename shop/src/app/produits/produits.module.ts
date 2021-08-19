import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProduitsComponent, AddComponent, ListComponent, UpdateComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ProduitsModule { }
