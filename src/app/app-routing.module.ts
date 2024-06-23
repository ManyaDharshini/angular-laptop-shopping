import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgotPassword/forgotPassword.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TrendingComponent } from './trending/trending.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CanActivateCheckoutGuard } from './can-activate-checkout.guard';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AdminNavbarComponent } from './admin/adminNavbar/adminNavbar.component';
import { AdminDashboardComponent } from './admin/adminDashboard/adminDashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AuthAdminGuard } from './admin/auth-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AddOffersComponent } from './admin/add-offers/add-offers.component';
import { AdminProductsComponent } from './admin/adminProducts/adminProducts.component';
import { EditProductComponent } from './admin/editProduct/editProduct.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { AuthCartGaurdGuard } from './auth-cart-gaurd.guard';
const routes: Routes = [
  { path:'', 
    component:HomeComponent
},
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'products',
    children: [
      {path: 'description/:viewDetails', component:ProductDetailsComponent}
    ]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate: [AuthCartGaurdGuard]
  },
  {
    path:'my-orders',
    component:OrdersComponent
  },
  {
    path:'checkout',
    component:PaymentComponent,
    canActivate: [CanActivateCheckoutGuard]
  },
  {
    path:'trending',
    component:TrendingComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'changePassword',
    component:ForgotPasswordComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    canActivate: [AuthAdminGuard],
    component:AdminDashboardComponent
  },
  {
    path:'admin',
    canActivate:[AuthAdminGuard], children: [
      { path:'dashboard', component:AdminDashboardComponent },
      { path:'users', component:UsersComponent },
      { path:'products', component: AdminProductsComponent},
      { path: 'edit-product/:id', component: EditProductComponent },
      { path:'add-products', component:AddProductsComponent },
      { path:'add-offers', component:AddOffersComponent},
      { path:'manage-orders', component:ManageOrdersComponent}
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
