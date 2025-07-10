import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IndicacionesService } from '../../../services/indicaciones.service';

@Component({
  selector: 'app-addIndicacion',
  templateUrl: './addIndicacion.component.html',
  styleUrls: ['./addIndicacion.component.css'],
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
})
export class AddIndicacionComponent implements OnInit {
  newIndicacion = {
    content: ''
  }
  

  constructor( private readonly indicacionesService: IndicacionesService) { }

  crearIndicacion(){
    this.indicacionesService.postIndicaciones(this.newIndicacion).subscribe({
      next: () => {
        alert('Inicación agregada');
      },

      error: () => {
        alert('Error al agregar indicación')
      }
    })
  }

  ngOnInit() {
  }

}
