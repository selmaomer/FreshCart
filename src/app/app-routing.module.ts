import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';

const routes: Routes = [
  
  {path:'',
  canActivate:[authGuard],
  component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'cart',component:CartComponent,title:'Cart'},
    {path:'wishlist',component:WishlistComponent,title:'wish list'},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'checkout/:id',component:CheckoutComponent,title:'Checkout'},
    {path:'allorders',component:AllordersComponent,title:'allorders'},
    {path:'forgetpassword',component:ForgetpasswordComponent,title:'forgetpassword'},
    {path:'details/:id',component:DetailsComponent,title:'Details'},
    {path:'brands',component:BrandsComponent,title:'Brands'},
    {path:'branddetails/:id',component:BranddetailsComponent,title:'Branddetails'},
    {path:'catogerise',component:CategoriesComponent,title:'Catogerise'}

  ]
},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgetpass',component:ForgetpasswordComponent,title:'forgetpassword'},

  ]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
