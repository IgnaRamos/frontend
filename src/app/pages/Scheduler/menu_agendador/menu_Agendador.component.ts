import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu_Agendador',
  templateUrl: './menu_Agendador.component.html',
  styleUrls: ['./menu_Agendador.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  
})
export class Menu_AgendadorComponent implements OnInit {


  constructor( private router: Router) { }
  inputRut : string = '';

  irPacienteScheduler(){
    this.router.navigate(['/pacienteScheduler', this.inputRut])
  }




  ngOnInit() {
    
  }

}
