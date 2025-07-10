import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menuUsuarios',
  templateUrl: './menuUsuarios.component.html',
  styleUrls: ['./menuUsuarios.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class MenuUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
