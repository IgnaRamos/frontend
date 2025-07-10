import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-menuPaciente',
  templateUrl: './menuPaciente.component.html',
  styleUrls: ['./menuPaciente.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class MenuPacienteComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }



}
