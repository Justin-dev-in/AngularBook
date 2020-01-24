import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private service:ArtistserviceService) { }

  ngOnInit() {
  }

  public showByCategory(category){

    this.service.artistByCategory(category).subscribe((data)=>{
     // this.message=data;
     

  })

}

}
