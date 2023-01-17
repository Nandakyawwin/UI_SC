import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  dd: any = document.querySelector('.dd');

  slide() {
    this.dd.style.marginLeft = '20%';
  }
}
