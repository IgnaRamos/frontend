import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { iExamen } from '../../../interfaces/examens.interface';

@Component({
  selector: 'app-verExamen',
  templateUrl: './verExamen.component.html',
  styleUrls: ['./verExamen.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule, MatTableModule ,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class VerExamenComponent implements OnInit {
  /*    "id": 8,
        "name": "Ecografía Doppler Renal",
        "modality": "Ultrasonido",
        "description": "Examen que permite evaluar la anatomía renal y el flujo sanguíneo"*/
  editarExamen : iExamen | null = null;

  editId : number | null = null;

  displayedColumns: string[] = ['id', 'name', 'modality', 'description', 'Editar', 'Borrar'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataTable : any;
  
  constructor(private readonly examenService: ExamenService,
    private readonly router: Router
   ) { }



  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.examenService.getExamenes().subscribe({
      next: (resp) => {console.log(resp)
        this.dataTable = resp;
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {console.error(err)},
      complete: () => {
        this.cancellEdit();
      }
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

  editExamen(row: any){
    if(this.editId !== null){
      this.cancellEdit();
    }
    this.editId = row.id;
    this.editarExamen = {...row};
  }

  cancellEdit(){
      this.editId = null;
      this.editarExamen = null;

  }


  

  saveExamenes(row: any){
    if(this.editarExamen){
        this.examenService.putExamenes(row.id, this.editarExamen).subscribe({
        next: () => {
          alert('Examen actualizado correctamente');
          this.getAllData();
        },

        error: (err) => {
          console.error('Error al actualizar examen')
        }
      });
    

    }
    



  }

  delExamenes(id: number) {
    if(confirm('Estás seguro de borrar el examen?')){
      this.examenService.deleteExamenes(id).subscribe({
        next: (resp) => {
          alert('Examen eliminado');
          this.getAllData();
           
        },
        error:() => {
          alert('Error al borrar examen');
          this.getAllData();
        }
      })
    }
  }


}
