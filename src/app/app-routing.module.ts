import { HomeComponent } from './home/home.component';
import { UserregitrationComponent } from './userregitration/userregitration.component';
import { ArtistregitrationComponent } from './artistregitration/artistregitration.component';
import { WelcomeArtistComponent } from './welcomeartist/welcomeartist.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { TestComponent } from './test/test.component';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';
import { ArtistListForUserComponent } from './artist-list-for-user/artist-list-for-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderconfirmationComponent} from './orderconfirmation/orderconfirmation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component'

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path: 'Artist_Login',component:ArtistloginComponent},
  {path: 'User_Login',component:UserloginComponent},
  {path: 'Artist_Registration',component:ArtistregitrationComponent},
  {path: 'User_Registration',component:UserregitrationComponent},
  {path: 'WelcomeArtist',component:WelcomeArtistComponent},
  {path: 'WelcomeUser',component:WelcomeuserComponent},
  {path: 'ArtistListForUser',component:ArtistListForUserComponent},
  {path: 'Test',component:TestComponent}, 
  {path:'OrderConfirmation',component:OrderconfirmationComponent},
  {path:"Admin_Login",component:AdminloginComponent},
  {path:"WelcomeAdmin",component:WelcomeadminComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rougtingComponants = [ArtistregitrationComponent,UserregitrationComponent,
UserloginComponent,ArtistloginComponent,WelcomeArtistComponent,WelcomeuserComponent,
ArtistListForUserComponent,TestComponent,OrderconfirmationComponent,AdminloginComponent,WelcomeadminComponent];
