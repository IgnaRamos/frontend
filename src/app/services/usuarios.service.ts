import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor( private readonly http: HttpClient) { }

getUsuarios(){
  const url = 'https://agenda-express-api-production.up.railway.app/api/users'
  return this.http.get<any>(url);

}

postUsuarios(data:any){
  const url ='https://agenda-express-api-production.up.railway.app/api/users'
  return this.http.post<any>(url, data);
}

putUsuarios(id: number, data:any){
  const url ='https://agenda-express-api-production.up.railway.app/api/users'
  return this.http.get<any>(url);
}

deleteUsuarios(id: number){
  const url = `https://agenda-express-api-production.up.railway.app/api/users/${id}`
  return this.http.delete<any>(url)
}

}
