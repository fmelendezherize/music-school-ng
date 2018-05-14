import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

export interface ProfessorResponse {
  id: string;
  names: string;
  lastnames: string;
  identification_number: string;
  phone: string;
  address: string;
  skills: string;
  email: string;
}

@Injectable()
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getProfessors(): Observable<ProfessorResponse[]> {
    return this.http
      .get<ProfessorResponse[]>('http://127.0.0.1:8000/professors/', {responseType: 'json'});
  }
}
