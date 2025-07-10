import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/loginService.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],

})
export class LoginAdminComponent implements OnInit {
  inputUser : string = '';
  inputPassword : string = '';

  constructor(private readonly loginService: LoginService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  get enabledButton(){
    return this.inputUser && this.inputPassword;
  }

  getLogin() {
    const dataLogin = { username: this.inputUser, password: this.inputPassword}
    this.loginService.login(dataLogin).subscribe({
      next: () => {},
      error: (err) => {console.error(err)},
      complete: () => {
        this.router.navigate(['/menuAdmin'])
      }
    })
  }

}

//*[routerLink]="['/menuAdmin']" routerLinkActive="router-link-active"