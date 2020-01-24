import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-artistbookings',
  templateUrl: './artistbookings.component.html',
  styleUrls: ['./artistbookings.component.css']
})
export class ArtistbookingsComponent implements OnInit {

  result:any;
  email:any
  constructor(private service:ArtistserviceService) { }

  ngOnInit() {
    this.getAllBookings();
  }

    public getAllBookings()
    {
      this.email=sessionStorage.getItem("artistemail")
      this.service.getBookings(this.email).subscribe((data)=>{
        this.result=data;
        console.log(this.result);
    })
 

}
}
