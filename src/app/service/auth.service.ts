import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user:any

  
constructor( private http: HttpClient) { }

RegisterUser(user)
{

var headers = new HttpHeaders();
headers.append('Content-Type','application/json') ;
return this.http.post('http://localhost:3000/api/auth/register',user,{headers: headers})
   map(res =>res )

}


}
