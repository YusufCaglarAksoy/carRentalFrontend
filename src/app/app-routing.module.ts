import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandComponent } from './components/admin-brand/admin-brand.component';
import { AdminCarComponent } from './components/admin-car/admin-car.component';
import { AdminColorComponent } from './components/admin-color/admin-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/car/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"admin/brands",component:AdminBrandComponent},
  {path:"admin/colors",component:AdminColorComponent},
  {path:"admin/cars",component:AdminCarComponent},
  {path:"admin/rentals",component:RentalComponent},
  {path:"admin/customers",component:CustomerComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
