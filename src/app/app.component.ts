import { Component } from '@angular/core';
import { AlumnosService } from './services/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaexamenangular';

  constructor(
    private _alumnosService: AlumnosService
  ){}

  isLogged(){
    return this._alumnosService.isLogged()
  }
}
