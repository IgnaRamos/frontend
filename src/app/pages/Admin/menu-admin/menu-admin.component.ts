import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class MenuAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
