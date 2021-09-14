import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TablesComponent } from './tables/tables.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabledataComponent } from './tabledata/tabledata.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeComponent } from './employee/employee.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { FilterPipe } from './filter.pipe';
// import { AuthGuard } from './guards/auth.guard';
// import { AuthComponent } from './auth/auth.component';
// import { AuthService } from './services/auth.service';
// import { NavigateComponent } from './navigate/navigate.component';
import { PostsComponent } from './posts/posts.component';
// import { ApidatatableComponent } from './apidatatable/apidatatable.component';
import { PostsService } from './services/posts.service';
// import {AuthInterceptor} from './services/auth.interceptor';
// import {LogginInterceptor} from './services/loggin.interceptor';
// import {AuthtokenInterceptor} from './services/authtoken.interceptor';

/*------------ddatori----------------*/
import { DdatoriuserComponent } from './ddatoriapi/ddatoriuser/ddatoriuser.component';
import {DdatoriuserInterceptor} from './ddatoriapi/interceptor/ddatoriuser.interceptor';
import {DdatoriuserGuard} from './ddatoriapi/guards/ddatoriuser.guard';
import {DdatoriuserService} from './ddatoriapi/service/ddatoriuser.service';
import { NavbarddatoriComponent } from './ddatoriapi/navbarddatori/navbarddatori.component';
import { AdminpanelComponent } from './ddatoriapi/adminpanel/adminpanel.component';
/*------------//ddatori----------------*/





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    TablesComponent,
    TabledataComponent,
    EmployeeComponent,
    DatabindingComponent,
    LoginComponent,
    DashboardComponent,
    // AuthComponent,
    // NavigateComponent,
    PostsComponent,
    DdatoriuserComponent,
    NavbarddatoriComponent,
    AdminpanelComponent
    // ApidatatableComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule
    
  ],
 providers: [
    
      {
      provide:HTTP_INTERCEPTORS,
      useClass:DdatoriuserInterceptor,
      multi:true
      } ,

      // {
      // provide:HTTP_INTERCEPTORS,
      // useClass:AuthInterceptor,
      // multi:true
      // } ,      //interceptor
      //  {
      // provide:HTTP_INTERCEPTORS,
      // useClass:LogginInterceptor,
      // multi:true
      // } ,
      //   {
      //  provide:HTTP_INTERCEPTORS,
      // useClass:AuthtokenInterceptor,
      // multi:true
      // } ,
    // AuthGuard,
    // AuthService,
    PostsService,
    DdatoriuserService,
    DdatoriuserGuard
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
