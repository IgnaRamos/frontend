import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menuExamen',
  templateUrl: './menuExamen.component.html',
  styleUrls: ['./menuExamen.component.css'],
  standalone: true,
  imports:[RouterModule],
})
export class MenuExamenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
