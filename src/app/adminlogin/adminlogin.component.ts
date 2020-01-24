import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin:Admin=new Admin("Admin@gmail.com","12345")
  constructor(private router :Router) { }

  ngOnInit() {
  }

  public adminNow()
  {
    if(this.admin)
    {
        this.router.navigate(["/Admin"]);
    }
    else{
      this.router.navigate(["/Home"])
    }
  }

}
