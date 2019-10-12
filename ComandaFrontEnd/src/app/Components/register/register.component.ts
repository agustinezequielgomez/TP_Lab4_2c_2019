import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.test().subscribe((response) => {
      console.log(response);
    });
  }

}
