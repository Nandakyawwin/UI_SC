import { Component, OnInit } from '@angular/core';
import { localService } from 'src/assets/localservice';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  datas: any;

  constructor(private http: localService) {

  }
  ngOnInit(): void {
    this.http.allJobAdmin().subscribe(
      response => {
        this.datas = response.msg; 
      })
  }



}
