import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistserviceService } from '../artistservice.service';
import { Artist } from '../artist'

@Component({
  selector: 'artistlogin',
  templateUrl: './artistlogin.component.html',
  styleUrls: ['./artistlogin.component.css']
})
export class ArtistloginComponent implements OnInit {

  artist:Artist=new Artist("","","",0,"","",0,"",0,"","",0,"");
   
   
   
  //  artistEmail:string
  //  artistPassword:string;
 message:any;



   constructor(private _service:ArtistserviceService,private router :Router) { }
 

  ngOnInit() {
  }

 
 
  public loginNow()
  {
    
    let resp=this._service.loginArtist(this.artist);
    resp.subscribe(data=>{
      this.message=data;
      console.log(data);
     sessionStorage.setItem("artistemail",data)
      if(this.message==="login failed")
      {
         this.router.navigate(["/artistreg"])
      }
      else{
        this.router.navigate(["/WelcomeArtist"])
      }
    });
  }
}
