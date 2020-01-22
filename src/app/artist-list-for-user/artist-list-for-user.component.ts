import { Component, OnInit } from '@angular/core';
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


 avl:Avl=new Avl("","",0,"","","",0,"","",0,"","",0,"");
  product;
 
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
       this.avl=this.router.getCurrentNavigation().extras.state;
        console.log(this.avl);
        
        
      }

  ngOnInit() {
       //console.log(history.state);
       this.product=history.state;
  }

}
