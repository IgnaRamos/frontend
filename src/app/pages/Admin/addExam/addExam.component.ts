import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';

@Component({
  selector: 'app-addExam',
  templateUrl: './addExam.component.html',
  styleUrls: ['./addExam.component.css'],
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
})
export class AddExamComponent implements OnInit {
  newExamen = {
    name: '',
    modality: '',
    description: ''
  }

  constructor(private readonly examenService: ExamenService) { }

  

  crearExamen(){
    this.examenService.postExamenes(this.newExamen).subscribe({
      next: () => {
        alert('Examen agregado');
      },

      error: (err) => {
        alert('Error al agregar examen')
      }
    })
  }

  ngOnInit() {
  }

}
