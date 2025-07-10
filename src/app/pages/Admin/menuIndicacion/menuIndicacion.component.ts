import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menuIndicacion',
  templateUrl: './menuIndicacion.component.html',
  styleUrls: ['./menuIndicacion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class MenuIndicacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
