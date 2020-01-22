import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';
import { AvlDate } from '../avldate';

@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeuserComponent implements OnInit {

  avldate:AvlDate=new AvlDate("","",0);
  constructor(private _service:ArtistserviceService,private router :Router) { }
  object:string;
  message:any;
  ngOnInit() {
  }


  public searchNow()
  {
    
    let resp=this._service.searchArtistByDate(this.avldate);
    resp.subscribe(data=>{
      this.message=data;
      this.router.navigate(["/ArtistListForUser"],{ state: this.message })
       console.log(this.message);

    
    });
  }
}
