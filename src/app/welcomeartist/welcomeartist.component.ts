import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Artist } from '../artist';
import { AddDate } from '../adddate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomeartist',
  templateUrl: './welcomeartist.component.html',
  styleUrls: ['./welcomeartist.component.css']
})
export class WelcomeArtistComponent implements OnInit {
  artist:Artist=new Artist("","","",0,"","",0,"","",0,"");
  
   email:string=sessionStorage.getItem("artistemail");
  
   adddate:AddDate=new AddDate("","",0,"");
  constructor(private service:ArtistserviceService,private router :Router) { }

  ngOnInit() {
    
   this.getArtistByIdNow();
  }


   message:any;
  public getArtistByIdNow()
  {
      this.service.getArtistByEmailId()
      .subscribe((data)=>{
        this.artist=data;
 

        console.log(this.artist);
       console.log(this.artist);
   });
  
  
  }
// public addArtistDate(fromdate,todate,fees)
//   {
    
//    this.service.AddArtistDate(fromdate,todate,fees).subscribe((data)=>{
//      this.message=data;
//    }) 
//   }


  public logoutNow(){

  
    sessionStorage.removeItem('artistemail');
  
    this.router.navigate(["/Home"]);
    this.message="logout successfull"
  }

}
