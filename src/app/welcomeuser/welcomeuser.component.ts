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

  
  constructor(private _service:ArtistserviceService,private router :Router) { }
  
  message:any;
  ngOnInit() {
  }


  public LogOutNow(){

  
    sessionStorage.removeItem('useremail');
  
    this.router.navigate(["/Home"]);
    this.message="logout successfull"
  }
} 
