import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import {FormGroup} from '@angular/forms';




@Component({
  selector: 'userregitration',
  templateUrl: './userregitration.component.html',
  styleUrls: ['./userregitration.component.css']
})
export class UserregitrationComponent implements OnInit {

user:User=new User("","",0,"","","","");
message:any;

  constructor( private service:UserserviceService) { }

  ngOnInit() {

  }

  public registerNow()
  {
    let x=this.service.registerUser(this.user);
    
    x.subscribe((data)=>this.message="Registered successfully");
    

  }
}







