import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path: 'register', component : RegisterComponent},
  {path: 'product-list', component : ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
