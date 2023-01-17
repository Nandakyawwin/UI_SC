import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localService } from 'src/assets/localservice';
import { Loki } from 'src/assets/loki';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private http: localService,private router:Router) {


  }
  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators
          .minLength(6)
      ]))
    })
  }
  startLogin(data: any) {
    this.http.AdminLogin(data).subscribe((result: any) => {
      if (result.con) {
        console.log(result);
        Loki.save(result.token);
        this.http.changeAuth(true);
        this.router.navigate(['/dashboard']);
      }
    })

  }


}
