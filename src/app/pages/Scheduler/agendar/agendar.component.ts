import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AgendarService } from '../../../services/agendar.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule]
})
export class AgendarComponent implements OnInit {

  rut!: string;

  newCita = {
    rut: '',
    exam_id: '',
    date: ''
  }

  constructor( private readonly agendarService: AgendarService,
    private readonly route:ActivatedRoute
   ) { }

  crearCita(){this.agendarService.postCrearCita(this.newCita.rut, this.newCita).subscribe({
    next: () => {
      alert('Cita agendada correctamente');
    },
    error: () => {
      alert('Error al agendar cita')
    }
  })
}

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rut') || '';
    this.newCita.rut = this.rut;
  }

}
