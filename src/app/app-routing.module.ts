import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './All-Wishlists/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './get-user/user.component';
import { StockCountryComponent } from './stock-country/stock-country.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "stock", component: StockComponent, canActivate:[authGuard]
  },
  {
    path: "wishlist", component: WishlistComponent,canActivate:[authGuard]
  },
  {
    path: "home", component: HomeComponent, canActivate:[authGuard]
  },
  {
    path: "update-user/:userId", component: UpdateUserComponent, canActivate:[authGuard]
  },
  {
    path: "getAllUser", component: UserComponent, canActivate:[authGuard]
  },
  {
    path: "stocksbycountryname/:countryname", component: StockCountryComponent, canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
