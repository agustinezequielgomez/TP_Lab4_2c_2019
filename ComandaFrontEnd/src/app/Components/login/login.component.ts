import { Component, OnInit } from '@angular/core';
import { AccessService } from '../../Services/access.service';
import { DataShareService } from '../../Services/data-share.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';
import { timer } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RedirectionServiceService } from '../../Services/redirection-service.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  public type = 'password';
  public saveUser = false;
  public form: FormGroup;
  public registering = false;
  private jwt: JwtHelperService = new JwtHelperService();
  constructor(private access: AccessService, public share: DataShareService,
              private redirection: RedirectionServiceService, private snack: DisplaySnackBarService) { }

  ngOnInit() {
    if (!this.jwt.isTokenExpired(localStorage.getItem('token'))) {
      this.processToken(localStorage.getItem('token'));
      this.redirection.redirectionService();
    }
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.registering = true;
    this.access.login(this.form.controls['nombre'].value, this.form.controls['password'].value).subscribe((token) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.processToken(token);
        sessionStorage.setItem('token', token);
        if (this.saveUser) {
          localStorage.setItem('token', token);
        }
        this.redirection.redirectionService();
      });
    },
    (err) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.snack.openSnackBar(err.error, 'error', 1);
      });
    });
  }

  showPassword()  {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  processToken(token: string) {
    this.share.setToken(token);
    const DATA = this.jwt.decodeToken(token).data;
    this.share.setUserName(DATA.nombre);
    this.share.setRole(DATA.tipo);
    sessionStorage.setItem('role', DATA.tipo);
  }
}
