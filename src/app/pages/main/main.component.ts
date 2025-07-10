import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [RouterModule],
  standalone: true
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
