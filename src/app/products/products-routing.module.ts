import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
{ path: '', component: AllproductsComponent },
{path:'view-product/:id',component: SingleviewComponent},
{path:'add-product',component: AddComponent},
{path:'edit-product/:id',component: EditComponent},
{path:'delete-product/:id',component: DeleteComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
