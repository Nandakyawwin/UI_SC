import { Component, OnInit } from '@angular/core';
import { Loki } from 'src/assets/loki';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
   styleUrls: ['./style.css']

})
export class MovieDetailComponent implements OnInit{
  title = 'Lord of the ring';
  Dura = '32 mins';
  rating = 'Rating';
  creator = 'Creator';
  overview = 'Overview';
  episode = 'Episodes';
  trailer = 'Trailers';
  info = 'Informations';
  network = 'Network';
  Cate = 'Category';
  ageRating = 'Age Rating';
  lang = 'Languages';
  weeklyDownload = 'Weekly Download';
  cast = 'Cast';
  down = 'Downloads';

  data: any;
  constructor() {
    
  }

  title1 = Loki.get_name();
  Dura1 = Loki.get_Duration();
  image = Loki.get_image();
  rating1 = Loki.get_rating();
  creator1 = Loki.get_creater();
  cate = Loki.get_category();
  overview1 = Loki.get_overview();
  episode1 = Loki.get_episodes();
  trailer1 = Loki.get_trailer1();
  trailer2 = Loki.get_trailer2();
  trailer3 = Loki.get_trailer3();
  network1 = Loki.get_Network();
  Cate1 = Loki.get_category();
  ageRating1 = Loki.get_age_rating();
  weeklyDownload1 = Loki.get_weekly_download();
  download1Low = Loki.get_download1Low();
  download1Lowtext = Loki.get_download1Lowtext();
  download1High = Loki.get_download1High();
  download1Hightext = Loki.get_download1Hightext();
  download2Low = Loki.get_download2Low();
  download2Lowtext =Loki.get_download2Lowtext();
  download2High = Loki.get_download2High();
  download2Hightext = Loki.get_download2Hightext();
  download3Low = Loki. get_download3Low();
  download3Lowtext =Loki.get_download3Lowtext();
  download3High = Loki.get_download3High();
  download3Hightext = Loki.get_download3Hightext();
  download4Low = Loki.get_download4Low();
  download4Lowtext = Loki.get_download4Lowtext();
  download4High = Loki.get_download4High();
  download4Hightext = Loki.get_download4Hightext();
  download5Low =Loki.get_download5Low();
  download5Lowtext =Loki.get_download5Lowtext();
  download5High = Loki.get_download5High();
  download5Hightext = Loki.get_download5Hightext();
  download6low = Loki.get_download6Low();
  download6Lowtext = Loki.get_download6Lowtext();
  download6High = Loki.get_download6High();
  download6Hightext = Loki.get_download6Hightext();
  download7Low = Loki.get_download7Low();
  download7Lowtext = Loki.get_download7Lowtext();
  download7High =Loki.get_download7High();
  download7Hightext = Loki.get_download7Hightext();
  download8Low = Loki.get_download8Low();
  download8Lowtext =Loki.get_download8Lowtext();
  download8High = Loki.get_download8High();
  download8Hightext = Loki.get_download8Hightext();
  download9Low = Loki.get_download9Low();
  download9Lowtext = Loki.get_download9Lowtext();
  download9High = Loki.get_download9High();
  download9Hightext = Loki.get_download9Hightext();
  download10Low = Loki.get_download10Low();
  download10Lowtext = Loki.get_download10Lowtext();
  download10High = Loki.get_download10High();
  download10Hightext = Loki.get_download10Hightext();
  translator = Loki.get_translator();
  encoder = Loki.get_encoder();
  uploader = Loki.get_uploader();
  ngOnInit(): void {
    
  }
}
