import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class NewspeakerService {
baseUrl="http://localhost:8080/speakers/";  
getAllSpeaker(){
return this.http.get<Speaker[]>(this.baseUrl);
}

getSpeakerByEmail(email:string){
  return this.http.get<Speaker>(this.baseUrl+email);
}

addSpeaker(dept:Speaker){
  return this.http.post<Speaker>(this.baseUrl,dept);
}

// updateSpeaker(dept:Speaker){
//   return this.http.put<Speaker>(this.baseUrl+dept.email,dept);
// }

// update(id: any, data: any): Observable<any> {
//   return this.http.put(`${baseUrl}/${id}`, data);
// }

delete(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}${id}`);
}

updateSpeaker(id: any,data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}${id}`,data);
}

  constructor(public http:HttpClient) { }
}
