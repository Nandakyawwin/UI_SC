import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localService } from 'src/assets/localservice';

@Component({
  selector: 'app-job-admin',
  templateUrl: './job-admin.component.html',
  styleUrls: ['./job-admin.component.css']
})
export class JobAdminComponent implements OnInit {
  form: any;
  datas: any;
  constructor(private http: localService, private router: Router) {

  }

  ngOnInit(): void {
    this.http.allJobAdmin().subscribe(
      response => {
        this.datas = response.msg;
        console.log(this.datas);
      }
    )

    this.form = new FormGroup({
      'name': new FormControl('', Validators.compose([
        Validators.required,
        Validators
          .minLength(30)
      ])),
      'discription': new FormControl('', Validators.compose([
        Validators.required,
        Validators
          .minLength(70)
      ]))
    })


  }

  post(form: any) {
    this.http.postJob(form).subscribe(
      response => {
        console.log(response)
        alert('Job posted');
        this.router.navigate(['/dashboard']);
      }
    )
  }

  delete(data: any) {
    this.http.deleteJob(data).subscribe(
      response => {
        this.datas = response.msg;
        console.log(this.datas);
        this.router.navigate(['/dashboard']);
      }
    )
    alert(data);
  }

}
