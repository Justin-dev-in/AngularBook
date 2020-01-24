import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css']
})
export class OrderconfirmationComponent implements OnInit {

  result:any;
  udate:any
  message:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private service:ArtistserviceService)
 { this.message=this.router.getCurrentNavigation().extras.state ;
 }
  ngOnInit() {

    this.getArtistNow();
  }

  public getArtistNow()
  {
    this.result=this.message;
    console.log(this.result);

    this.udate=sessionStorage.getItem("userdate");
   console.log(this.udate);
  }

    public orderNow(artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate){

      console.log("sdkjfgbjksd"+artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate)
      this.service.orderArtist(artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate).subscribe((data)=>{
        this.message=data;


    })
    }
  }


