import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { iPaciente } from '../../../interfaces/pacientes.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verPaciente',
  templateUrl: './verPaciente.component.html',
  styleUrls: ['./verPaciente.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MatTableModule,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class VerPacienteComponent implements OnInit{
/*        "id": 8,
        "first_name": "",
        "last_name": "",
        "dob": "2021-04-13T00:00:00.000Z",
        "phone": "39038738",
        "email": "@gmail.com",
        "rut": "20123123-1"
    }*/

  editarPaciente: iPaciente | null = null;
  
  editId : number | null = null;


  displayedColumns: string[] = ['id',  'rut', 'first_name', 'last_name', 'dob', 'phone', 'email', 'Editar', 'Borrar'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataTable : any;

  constructor( private readonly pacientesService: PacientesService,
    private readonly router: Router
  ) { }

  

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.pacientesService.getPacientes().subscribe({
      next: (resp) => {console.log(resp)
        this.dataTable = resp;
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {console.error(err)},
      complete: () => {}
  })

  
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isEditing(row: any){
    return this.editId === row.id;
  }

  editPaciente(row: any){
    if(this.editId !== null){
      this.cancellEdit();
    }
    this.editId = row.id;
    this.editarPaciente = {...row};
  }

  cancellEdit(){
    this.editId = null;
    this.editarPaciente = null;

  }

  savePaciente(row: any){
    if(this.editarPaciente){
      this.pacientesService.putPacientes(row.id, this.editarPaciente).subscribe({
        next: () => {
          alert('Paciente actualizado correctamente');
          this.getAllData();
        },

        error: () => {
          alert('Error al actualizar paciente')
        }
      });
    }
  }




  delPacientes(rut: number){
    if(confirm('Estás seguro de borrar al paciente?')){
      this.pacientesService.deletePacientes(rut).subscribe({
        next: () => {
          alert('Paciente eliminado');
          this.getAllData();
        },

        error:() => {
          alert('Error al eliminar Paciente');
          this.getAllData();
        }
      })
    }
  }

}
