import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-addUsuario',
  templateUrl: './addUsuario.component.html',
  styleUrls: ['./addUsuario.component.css'],
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
})
export class AddUsuarioComponent implements OnInit {
  newUsuario = {
    username: '',
    password: '',
    role_id: ''
  }

  constructor( private readonly usuariosService: UsuariosService) { }

  crearUsuario(){
    this.usuariosService.postUsuarios(this.newUsuario).subscribe({
      next:() => {
        alert('Usuario agregado');
      },

      error: () => {
        alert('Error al agregar usuario')
      }
    })
  }

  ngOnInit() {
  }

}
