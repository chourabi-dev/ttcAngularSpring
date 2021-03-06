import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'clients',pathMatch:'full' },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)

},
  { path: 'produits', loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
