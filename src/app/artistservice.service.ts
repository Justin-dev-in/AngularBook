import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {


  constructor(private http:HttpClient) { }



  public registerArtist(artist)
  {
      return this.http.post("http://localhost:9090/artistslist",artist);
  }

 // private router:Router;
   public loginArtist(artist)
   {

     console.log(artist);
        return this.http.post("http://localhost:9090/Alogin",artist,{responseType:'text'});
   }     
   public getArtistByEmailId()
   {
       var email=sessionStorage.getItem('artistemail')
        return this.http.get("http://localhost:9090//artistslist/"+email);

   }  

   public searchArtistByDate(avldate)
   {
     console.log(avldate);
    return this.http.post("http://localhost:9090//searchArtistsBydate",avldate,{responseType:'text'});
   }
}
