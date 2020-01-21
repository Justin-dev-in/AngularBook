import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'artistregitration',
  templateUrl: './artistregitration.component.html',
  styleUrls: ['./artistregitration.component.css']
})
export class ArtistregitrationComponent implements OnInit {
  artist:Artist=new Artist("","","",0,"","",0,"","",0,"");
  message:any;
  
    constructor(private service:ArtistserviceService) { }
  
    ngOnInit() {
    
     
    }
  
  
    public registerNow()
    {
        let res=this.service.registerArtist(this.artist)
        res.subscribe((data)=>this.message=data);
    }}
