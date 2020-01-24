import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient,private router :Router) { }


  public registerUser(user)
  {
      return this.http.post("http://localhost:9090/userslist",user);
  }

 // private router:Router;
   public loginUser(user)
   {

     console.log(user);
        return this.http.post("http://localhost:9090/Ulogin",user,{responseType:'text'});
   } 
   
   

   
   public getArtistByEmailId()
   {
       var email=sessionStorage.getItem('useremail')
        return this.http.get("http://localhost:9090//artistslist/"+email);

   }  


}
