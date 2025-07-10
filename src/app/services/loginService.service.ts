import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private bearerToken = 'bearer_token';

constructor( private readonly http: HttpClient) {
 }

 login(dataLogin: {username : string, password : string}) : Observable<{token: string}>{

  const url = 'https://agenda-express-api-production.up.railway.app/api/auth/login'
  return this.http.post<{token: string}>(url, dataLogin ).pipe(
    tap(response => {localStorage.setItem(this.bearerToken, response.token)})
  )
 }

}
