import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';

@Component({
  selector: 'app-addPaciente',
  templateUrl: './addPaciente.component.html',
  styleUrls: ['./addPaciente.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class AddPacienteComponent implements OnInit {

  newPaciente = {
    first_name: '',
    last_name: '',
    dob: '',
    phone: '',
    email: '',
    rut: ''
  }




  constructor( private readonly pacientesService: PacientesService) { }

  crearPaciente(){
    this.pacientesService.postPacientes(this.newPaciente).subscribe({
      next: () => {
        alert('Paciente agregado correctamente');
      },
      error: () => {
        alert('Error al agregar paciente')
      }
    })
  }

  ngOnInit() {
  }

}
