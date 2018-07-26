import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'


import { NavbarComponent}from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GrowthConsultingComponent } from './growth-consulting/growth-consulting.component';
import { ProductDevComponent } from './product-dev/product-dev.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { AuthGaurd } from './services/authGaurd.service';
import { ServicesModule } from './services/services.module';
import { DynamicComponent } from './aboutus/dynamic/dynamic.component';
import { AppServices } from './app.service';
import { FilterPipe } from './filter.pipe';


const routes : Routes = [
  { path: '' , redirectTo : '/Home' , pathMatch : 'full'},
  { path : 'Home' , component : HomeComponent},
  { path : 'Aboutus' , component : AboutusComponent},
  { path : 'Services' , component : ServicesComponent , children : [
    { path: '' , redirectTo : '/Services/GrowthConsulting' , pathMatch : 'full'},
    { path : 'GrowthConsulting' , component:GrowthConsultingComponent},
    { path : 'ProductDev' , component : ProductDevComponent },
    { path : 'DataScience' , component : DataScienceComponent }
  ] },
  { path : 'Login' , component : LoginComponent},
  { path : 'Register' , component : RegisterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    GrowthConsultingComponent,
    ProductDevComponent,
    DataScienceComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DynamicComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule

  ],
  providers: [
    LoginService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi: true
    },
    AuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
