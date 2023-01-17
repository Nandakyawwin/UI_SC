import { Component, OnInit } from '@angular/core';
import { localService } from 'src/assets/localservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  moviecount: any;
  admincount: any;
  jobcount: any;
  constructor(private http: localService) {

  }
  ngOnInit(): void {
    this.http.getallmovie().subscribe(
      response => {
        console.log(response.msg)
        this.moviecount = response.msg.length;
      },
      error => {
        console.log(error);
      }
    )
    this.http.allJobAdmin().subscribe(
      response => {
        this.jobcount = response.msg.length;
        console.log(this.jobcount);
      })

    this.http.AdminAll().subscribe(
      (response: any) => this.admincount = response.msg.length
    )

  }
}
