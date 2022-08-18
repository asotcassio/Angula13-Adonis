import { Response } from '../Response';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { Moment } from '../Moment'; //interface
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MomentService {
  private baseApiUrl = environment.baseApiUrl //exportando api
  private apiUrl = `${this.baseApiUrl}api/moments`//setando a url do services

  constructor(private http: HttpClient) {}

   getMoments():Observable<Response<Moment[]>> {
      return this.http.get<Response<Moment[]>>(this.apiUrl);
   }

    createMoment(formData: FormData):Observable<FormData> {
      return this.http.post<FormData>(this.apiUrl , formData)
   }

}
