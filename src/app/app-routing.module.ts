import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandComponent } from './components/admin-brand/admin-brand.component';
import { AdminCarComponent } from './components/admin-car/admin-car.component';
import { AdminColorComponent } from './components/admin-color/admin-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/car/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"admin/brands",component:AdminBrandComponent, canActivate:[LoginGuard]},
  {path:"admin/colors",component:AdminColorComponent, canActivate:[LoginGuard]},
  {path:"admin/cars",component:AdminCarComponent, canActivate:[LoginGuard]},
  {path:"admin/rentals",component:RentalComponent, canActivate:[LoginGuard]},
  {path:"admin/customers",component:CustomerComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
