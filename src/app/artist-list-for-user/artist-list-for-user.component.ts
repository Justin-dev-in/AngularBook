import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../artist';
import { JsonPipe } from '@angular/common';
import { Avl } from '../avail';

@Component({
  selector: 'app-artist-list-for-user',
  templateUrl: './artist-list-for-user.component.html',
  styleUrls: ['./artist-list-for-user.component.css']
})
export class ArtistListForUserComponent implements OnInit {
 message:any;

result:any;
constructor(private router:Router, private activatedRoute:ActivatedRoute)
 { this.message=this.router.getCurrentNavigation().extras.state ;
 }
     
        
      

  ngOnInit() {
      this.getArtistNow();
  }

  public getArtistNow()
    {
      this.result=JSON.parse(this.message);
      console.log(this.result);
     
    

     // console.log(this.result.artist.artistPicture);
    }


    public sendDetailstoCart(artistname,artistfees,artistAddress,artistEmail)
    {
      //this.result=JSON.parse(this.message);
      console.log(artistname,artistfees,artistAddress,artistEmail);
      this.message=[artistname,artistfees,artistAddress,artistEmail];
      this.router.navigate(["/OrderConfirmation"],{ state: this.message })
      console.log(this.message);
    }
}




