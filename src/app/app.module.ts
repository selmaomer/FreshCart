import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {CarouselModule} from 'ngx-owl-carousel-o';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { MyhttpInterceptor } from './shared/interceptors/myhttp.interceptor';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    NavAuthComponent,
    NavBlankComponent,
    NotfoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    ForgetpasswordComponent,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    WishlistComponent,
    BranddetailsComponent,
    SubcategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
