import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { IndicacionesService } from '../../../services/indicaciones.service';

@Component({
  selector: 'app-verIndicacion',
  templateUrl: './verIndicacion.component.html',
  styleUrls: ['./verIndicacion.component.css'],
  standalone: true,
  imports: [RouterModule, MatTableModule ,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class VerIndicacionComponent implements OnInit {

     /*        "id": 1,
        "content": "Paciente requiere ayuno dependiendo de su edad: - 0 meses a 2 años: 3 hrs de ayuno / 2 años a 6 años: 4 hrs de ayuno / 6 años o más: 6 horas de ayuno"
        */

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
