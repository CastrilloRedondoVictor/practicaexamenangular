import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/Alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {

public alumnos!: Alumno[];

constructor(
  private _almunosService: AlumnosService,
  private router: Router
){}


ngOnInit(): void {
  this.getAlumnos()
}

getAlumnos() {
  this._almunosService.getAlumnos().subscribe(response => {
    this.alumnos = response
  })
}

postAlumno() {
  let alumno = {
    "idAlumno": 111,
    "nombre": "JJJJ",
    "apellidos": "string",
    "imagen": "string",
    "activo": 1,
    "idCurso": 0

  }
  this._almunosService.postAlumno(alumno).subscribe(response => {
    console.log(response)
    this.getAlumnos()
  })
}

logOut(){
  localStorage.removeItem('access_token');
  this.router.navigate(['/login'])
}

}

