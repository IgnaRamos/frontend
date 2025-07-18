import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { AgendarService } from '../../../services/agendar.service';

@Component({
  selector: 'app-verPendientes',
  templateUrl: './verPendientes.component.html',
  styleUrls: ['./verPendientes.component.css'],
  standalone: true,
  imports: [RouterModule,FormsModule, CommonModule, RouterModule, MatTableModule,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]

})
export class VerPendientesComponent implements OnInit {
/*          "id": 12,
        "patient_id": 19,
        "exam_id": 8,
        "date": "2025-07-28T00:00:00.000Z",
        "created_by": 2,
        "status": "pending",
        "indication_id": 1,
        "exam_name": "Ecografía Doppler Renal"*/
    
    rutPcte: string = ''
    displayedColumns: string[] = ['id',  'exam_id', 'exam_name', 'date','status','Editar', 'Borrar'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    dataTable : any;

  constructor( private readonly agendarService: AgendarService) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.agendarService.getCitasPendientes(this.rutPcte).subscribe({
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

}
