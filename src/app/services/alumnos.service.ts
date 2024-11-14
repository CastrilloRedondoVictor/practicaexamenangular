import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private http: HttpClient,
  ) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>('https://apiejemplos.azurewebsites.net/api/Auth/Login', { userName, password })
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getAlumnos(): Observable<any> {

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get('https://apiejemplos.azurewebsites.net/api/Alumnos/AlumnosToken', { headers })
  }

  postAlumno(alumno: Alumno): Observable<any> {

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post('https://apiejemplos.azurewebsites.net/api/Alumnos/InsertAlumnoToken', JSON.stringify(alumno), { headers })
  }
}
