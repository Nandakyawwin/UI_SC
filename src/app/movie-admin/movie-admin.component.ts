import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localService } from 'src/assets/localservice';
import { Loki } from 'src/assets/loki';
@Component({
  selector: 'app-movie-admin',
  templateUrl: './movie-admin.component.html',
  styleUrls: ['./movie-admin.component.css']
})
export class MovieAdminComponent implements OnInit {
  datas: any;
  form: any;
  constructor(private http: localService, private router: Router) {

  }
  ngOnInit(): void {
    this.http.getallmovie().subscribe(
      response => {
        this.datas = response.msg;
        console.log(this.datas)
      },
      error => {
        console.log(error);
      }
    )

    this.form = new FormGroup({
      'movie': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)

      ]))
    })

  }
}
