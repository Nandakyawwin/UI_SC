import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localService } from 'src/assets/localservice';
import { Loki } from 'src/assets/loki';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie_data: any;
  datas: any;
  constructor(private http: localService, private router: Router) {

  }

  ngOnInit(): void {
    this.http.getallmovie().subscribe(
      response => {
        this.datas = response.msg;
        console.log(response.msg.length)
      },
      error => {
        console.log(error);
      }
    )
  }

  moviedetail(data: any) {
    this.http.findMovie(data).subscribe(
      response => {
        this.movie_data = response
        // console.log(this.movie_data);
        let obj = {
          name: data.name,
          image: data.image,
          Duration: data.Duration,
          category: data.category,
          rating: data.rating,
          creater: data.creater,
          overview: data.overview,
          episodes: data.episodes,
          trailer1: data.trailer1,
          trailer2: data.trailer2,
          trailer3: data.trailer3,
          Network: data.Network,
          age_rating: data.age_rating,
          weekly_download: data.weekly_download,
          download1Low: data.download1Low,
          download1Lowtext: data.download1Lowtext,
          download1High: data.download1High,
          download1Hightext: data.download1Hightext,
          download2Low: data.download2Low,
          download2Lowtext: data.download2Lowtext,
          download2High: data.download2High,
          download2Hightext: data.download2Hightext,
          download3Low: data.download3Low,
          download3Lowtext: data.download3Lowtext,
          download3High: data.download3High,
          download3Hightext: data.download3Hightext,
          download4Low: data.download4Low,
          download4Lowtext: data.download4Lowtext,
          download4High: data.download4High,
          download4Hightext: data.download4Hightext,
          download5Low: data.download1Low,
          download5Lowtext: data.download1Lowtext,
          download5High: data.download1High,
          download5Hightext: data.download1Hightext,
          download6Low: data.download1Low,
          download6Lowtext: data.download1Lowtext,
          download6High: data.download1High,
          download6Hightext: data.download1Hightext,
          download7Low: data.download1Low,
          download7Lowtext: data.download1Lowtext,
          download7High: data.download1High,
          download7Hightext: data.download1Hightext,
          download8Low: data.download1Low,
          download8Lowtext: data.download1Lowtext,
          download8High: data.download1High,
          download8Hightext: data.download1Hightext,
          download9Low: data.download1Low,
          download9Lowtext: data.download1Lowtext,
          download9High: data.download1High,
          download9Hightext: data.download1Hightext,
          download10Low: data.download1Low,
          download10Lowtext: data.download1Lowtext,
          download10High: data.download1High,
          download10Hightext: data.download1Hightext,
          encoder: data.download1Low,
          translator: data.download1Lowtext,
          uploader: data.download1High
        }
        Loki.save_detail(obj);
        this.router.navigate(['/moviedetail']);
      }
    )
  }
}
