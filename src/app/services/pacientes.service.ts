import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

constructor( private readonly http: HttpClient) { }

getPacientes(){
  const url ='https://agenda-express-api-production.up.railway.app/api/patients'
  return this.http.get<any>(url);
}

postPacientes(data:any): Observable<any>{
  const url ='https://agenda-express-api-production.up.railway.app/api/patients'
  return this.http.post<any>(url, data);
}

putPacientes(id: number, data:any){
  const url =`https://agenda-express-api-production.up.railway.app/api/patients/${id}`
  return this.http.put<any>(url, data);
}

deletePacientes(rut: number){
  const url = `https://agenda-express-api-production.up.railway.app/api/patients/${rut}`
  return this.http.delete<any>(url)
}

}
