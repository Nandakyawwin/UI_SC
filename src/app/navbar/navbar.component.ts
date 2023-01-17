import { Component, OnInit } from '@angular/core';
import { localService } from 'src/assets/localservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements
  OnInit {
  isAuth: any;

  constructor(private http: localService) {

  }
  ngOnInit() {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
  }

}
