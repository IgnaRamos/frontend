import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  standalone: true,
 
})
export class PacienteComponent implements OnInit {
  rutPaciente!: string;


  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.rutPaciente = this.route.snapshot.paramMap.get('rut')!;

  }

  agendarCita(){
    this.router.navigate(['/agendarCita', this.rutPaciente]);
  }

  verPendientes(){
    this.router.navigate(['verPendientes', this.rutPaciente]);
  }

}
