import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccessService } from '../../Services/access.service';
import { RegisterEmployeeRequest, EmployeeRole } from '../../Classes/register-employee-request';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';
import { timer } from 'rxjs';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import { FileUploadService } from '../../Services/file-upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public userName: string;
  public password: string;
  public role: string;
  public profilePic: File = null;
  public roles = Object.keys(EmployeeRole);
  public registering = false;
  public recaptcha = false;
  @Output() SuccessfulRegister = new EventEmitter();
  constructor(private access: AccessService, private snack: DisplaySnackBarService, private upload: FileUploadService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      // role: new FormControl('', Validators.required)
    });
  }

  getProfilePic($event) {
    this.profilePic = $event;
  }

  register() {
    this.registering = true;
    const REQUEST = new FormData();
    REQUEST.append('nombre', this.form.controls['nombre'].value);
    REQUEST.append('pass', this.form.controls['password'].value);
    REQUEST.append('tipo', 'cliente');
    REQUEST.append('foto', this.profilePic);
    this.access.register(REQUEST).subscribe((response) => {
      this.upload.uploadFile(this.profilePic, `${environment.USERS_DIRECTORY}${response}`).subscribe((percentage) => {
        if (percentage === 100) {
          this.registering = false;
          this.snack.openSnackBar('Usuario creado con exito.', 'success', 3);
          this.SuccessfulRegister.emit();
        }
      });
    }, (err) => {
      timer(1000).subscribe(() => {
        this.registering = false;
        this.snack.openSnackBar(err.error, 'error', 1);
      });
    });
  }

  resolvedCaptcha($event) {
    this.recaptcha = true;
  }
}
