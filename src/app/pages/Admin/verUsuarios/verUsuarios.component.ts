import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-verUsuarios',
  templateUrl: './verUsuarios.component.html',
  styleUrls: ['./verUsuarios.component.css'],
  standalone: true,
  imports: [RouterModule, MatTableModule ,MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule]
})
export class VerUsuariosComponent implements OnInit {

  /*        "id": 2,
        "username": "scheduler",
        "role": "scheduler"*/

  displayedColumns: string[] = ['id', 'username', 'role', 'Editar', 'Borrar'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataTable : any;

  constructor(private readonly usuariosService: UsuariosService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.usuariosService.getUsuarios().subscribe({
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

  /* Metodo para borrar usuarios */
  delUsuarios(id: number){
    if(confirm('Estas seguro de eliminar el usuario?')){
      this.usuariosService.deleteUsuarios(id).subscribe({
        next: () => {
          alert('Usuario eliminado');
          this.getAllData();
        },
        error: () => {
          alert('Error al borrar usuario');
          this.getAllData();
        }
      })
    }
  }


}
