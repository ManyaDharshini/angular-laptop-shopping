import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TrendingComponent } from './trending/trending.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './login/forgotPassword/forgotPassword.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/adminDashboard/adminDashboard.component';
import { AdminNavbarComponent } from './admin/adminNavbar/adminNavbar.component';
import { UsersComponent } from './admin/users/users.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AddOffersComponent } from './admin/add-offers/add-offers.component';
import { AdminProductsComponent } from './admin/adminProducts/adminProducts.component';
import { EditProductComponent } from './admin/editProduct/editProduct.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';

@NgModule({
  declarations: [		
    AppComponent,
      AboutComponent,
      ContactComponent,
      HomeComponent,
      ProductsComponent,
      TrendingComponent,
      LoginComponent,
      RegisterComponent,
      CartComponent,
      NavbarComponent,
      PaymentComponent,
      ProductDetailsComponent,
      FooterComponent,
      ForgotPasswordComponent,
      PageNotFoundComponent,
      AdminComponent,
      AdminDashboardComponent,
      AdminNavbarComponent,
      UsersComponent,
      AddProductsComponent,
      AddOffersComponent,
      AdminProductsComponent,
      EditProductComponent,
      OrdersComponent,
      ManageOrdersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
