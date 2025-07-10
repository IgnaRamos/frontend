import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicacionesService {

constructor( private readonly http: HttpClient) { }

getIndicaciones(){
  const url = 'https://agenda-express-api-production.up.railway.app/api/indications'
  return this.http.get<any>(url);
}

postIndicaciones(data:any){
  const url ='https://agenda-express-api-production.up.railway.app/api/indications'
  return this.http.post<any>(url, data);
}

putIndicaciones(id: number, data:any){
  const url =`https://agenda-express-api-production.up.railway.app/api/indications/${id}`
  return this.http.get<any>(url);
}

deleteIndicaciones(id: number){
  const url = `https://agenda-express-api-production.up.railway.app/api/indications/${id}`
  return this.http.delete<any>(url)
}

}
