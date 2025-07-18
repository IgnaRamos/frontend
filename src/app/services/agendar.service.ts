import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {

constructor( private readonly http: HttpClient) { }

getTrazabilidad(rut: string){
  const url = `https://agenda-express-api-production.up.railway.app/api/schedules/patient/${rut}/history`
  return this.http.get<any>(url);
}

getCitasPendientes(rut: string){
  const url = `https://agenda-express-api-production.up.railway.app/api/schedules/patient/${rut}`
  return this.http.get<any>(url);
}

postCrearCita(rut: string, data:any){
  const url =`https://agenda-express-api-production.up.railway.app/api/schedules/patient/${rut}`
  return this.http.post<any>(url, data);
}



}
