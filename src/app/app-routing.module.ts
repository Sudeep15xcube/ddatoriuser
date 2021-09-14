import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {FormComponent} from './form/form.component';
import { TablesComponent } from './tables/tables.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { EmployeeComponent } from './employee/employee.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './login/login.component';  
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './guards/auth.guard'; 
// import { AuthComponent } from './auth/auth.component';
// import { ApidatatableComponent } from './apidatatable/apidatatable.component';
import { PostsComponent } from './posts/posts.component';
// import { AuthtokenGuard } from './guards/authtoken.guard'; 
/*-------------ddatoriapi-----------------------*/
import { DdatoriuserComponent } from './ddatoriapi/ddatoriuser/ddatoriuser.component';
import {DdatoriuserGuard} from './ddatoriapi/guards/ddatoriuser.guard';
import { AdminpanelComponent } from './ddatoriapi/adminpanel/adminpanel.component';
/*-------------ddatoriapi-----------------------*/



const routes: Routes = [

{
  path:'home', component : HomeComponent
},
 // { 
 //    path: '',
 //   redirectTo: '/home',  //redirecting to home page at server start
 //   pathMatch: 'full'
 //   },

// {
//   path: 'apitabledata', component: ApidatatableComponent
// },

{
  path: 'posts', component: PostsComponent  //, canActivate:[AuthtokenGuard]
},
{
  path: 'form', component: FormComponent
},
{
  path: 'tables', component: TablesComponent
},
{
  path: 'tabledata', component: TabledataComponent
},
{
  path: 'employee', component: EmployeeComponent
},
{
  path: 'databinding', component: DatabindingComponent
},
{
 path: 'login', component: LoginComponent 
},  
{
 path: 'dashboard', component: DashboardComponent  //, canActivate : [AuthGuard] 
},

 // { 
 //    path: '',
 //   redirectTo: '/auth',  //redirecting to home page at server start
 //   pathMatch: 'full'
 //   },



 { 
    path: '',
   redirectTo: 'ddatoriuser',  //redirecting to home page at server start
   pathMatch: 'full'
   },
{
  path:'ddatoriuser', component:DdatoriuserComponent
},
// {
//   path: 'auth', component: AuthComponent 
// },
{
  path:'admin', component:AdminpanelComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
