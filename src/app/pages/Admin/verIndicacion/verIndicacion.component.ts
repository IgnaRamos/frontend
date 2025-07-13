import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { IndicacionesService } from '../../../services/indicaciones.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { iIndication } from '../../../interfaces/indicaciones.interface';

@Component({
  selector: 'app-verIndicacion',
  templateUrl: './verIndicacion.component.html',
  styleUrls: ['./verIndicacion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatTableModule ,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class VerIndicacionComponent implements OnInit {

     /*        "id": 1,
        "content": "Paciente requiere ayuno dependiendo de su edad: - 0 meses a 2 años: 3 hrs de ayuno / 2 años a 6 años: 4 hrs de ayuno / 6 años o más: 6 horas de ayuno"
        */
  
  editarIndicacion : iIndication | null = null;
  
  editId : number | null = null;

  displayedColumns: string[] = ['id', 'content', 'Editar', 'Borrar'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataTable : any;

  constructor(private readonly indicacionesService: IndicacionesService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.indicacionesService.getIndicaciones().subscribe({
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

  editIndicacion(row: any){
    if(this.editId !== null){
      this.cancellEdit();
    }
    this.editId = row.id;
    this.editarIndicacion = {...row};
  }

  cancellEdit(){
      this.editId = null;
      this.editarIndicacion = null;

  }


  

  saveIndicaciones(row: any){
    if(this.editarIndicacion){
        this.indicacionesService.putIndicaciones(row.id, this.editarIndicacion).subscribe({
        next: () => {
          alert('Examen actualizado correctamente');
          this.getAllData();
        },

        error: () => {
          alert('Error al actualizar la indicación')
        }
      });
    }
  }
  

  delIndicaciones(id: number){
    if(confirm('Estás seguro de borrar la indicación?')){
      this.indicacionesService.deleteIndicaciones(id).subscribe({
        next: () => {
          alert('Indicación borrada');
          this.getAllData();
        },
        error:() => {
          alert('Error al borrar indicación');
          this.getAllData();
        }
      })
    }
  }



}
