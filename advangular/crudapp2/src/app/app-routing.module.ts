import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
const routes: Routes = [
  {path: 'Products', component: HomeComponent},
  {path: 'create-product', component: CreateComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'update-product/:productId', component: UpdateComponent},
  {path: 'delete-product/:productId', component: DeleteComponent},
  {path: 'Productdetails/:productId', component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
