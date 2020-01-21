import { ArtistserviceService } from './artistservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule , rougtingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './userservice.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    rougtingComponants,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistserviceService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
