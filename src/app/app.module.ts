import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockComponent } from './stock/stock.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { HomeComponent } from './All-Wishlists/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './get-user/user.component';
import { StockCountryComponent } from './stock-country/stock-country.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StockComponent,
    WishlistComponent,
    HomeComponent,
    UpdateUserComponent,
    UserComponent,
    StockCountryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
