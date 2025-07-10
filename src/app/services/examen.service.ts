import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

constructor( private readonly http: HttpClient) { }

getExamenes(){
  const url = 'https://agenda-express-api-production.up.railway.app/api/exams'
  return this.http.get<any>(url);
}

postExamenes(data: any):Observable<any>{
  const url = 'https://agenda-express-api-production.up.railway.app/api/exams'
  return this.http.post<any>(url, data);
}

putExamenes(id: number, data:any){
  const url = `https://agenda-express-api-production.up.railway.app/api/exams/${id}`
  return this.http.put<any>(url, data);
}

deleteExamenes(id: number){
  const url = `https://agenda-express-api-production.up.railway.app/api/exams/${id}`
  return this.http.delete<any>(url);
}

}
