import { HomeComponent } from './home/home.component';
import { UserregitrationComponent } from './userregitration/userregitration.component';
import { ArtistregitrationComponent } from './artistregitration/artistregitration.component';
import { WelcomeArtistComponent } from './welcomeartist/welcomeartist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';

import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path: 'Artist_Login',component:ArtistloginComponent},
  {path: 'User_Login',component:UserloginComponent},
  {path: 'Artist_Registration',component:ArtistregitrationComponent},
  {path: 'User_Registration',component:UserregitrationComponent},
  {path: 'WelcomeArtist',component:WelcomeArtistComponent},
  {path: 'WelcomeUser',component:WelcomeuserComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Admin_Login",component:AdminloginComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rougtingComponants = [ArtistregitrationComponent,UserregitrationComponent,
UserloginComponent,ArtistloginComponent,WelcomeArtistComponent];
