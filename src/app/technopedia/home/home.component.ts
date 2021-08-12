import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  technologiesStack: any = [];
  carouselIndex: number = -1;
  carousels: any = [];
  interval: any;
  constructor(private httpClient: HttpClient) {
    this.technologiesStack = [
      [
        {
          name: 'General',
        },
        {
          name: 'Programming',
        },
        {
          name: 'Human Anatomy',
        },
      ],
      [
        {
          name: 'History & Facts',
        },
        {
          name: 'Sports',
        },
        {
          name: 'Gaming',
        },
      ],
      [
        {
          name: 'New Born',
        },
        {
          name: 'Electronics',
        },
        {
          name: 'Science',
        },
      ],
    ];
  }
  ngOnInit() {
    this.httpClient.get('assets/files/carousel.json').subscribe((data) => {
      this.carousels = data;
    });
    this.interval = this.returnInterval();
  }

  moveNext() {
    clearInterval(this.interval);
    this.carouselIndex = this.carouselIndex + 1;
    if (this.carouselIndex > this.carousels.length - 1) this.carouselIndex = -1;
    this.interval = this.returnInterval();
  }

  movePrev() {
    clearInterval(this.interval);
    this.carouselIndex = this.carouselIndex - 1;
    if (this.carouselIndex < -1) this.carouselIndex = this.carousels.length - 1;
    this.interval = this.returnInterval();
  }

  returnInterval() {
    return setInterval(() => {
      this.carouselIndex = this.carouselIndex + 1;
      if (this.carouselIndex > this.carousels.length - 1)
        this.carouselIndex = -1;
    }, 10000);
  }

  moveCurrent(currentIndex: number) {
    clearInterval(this.interval);
    this.carouselIndex = currentIndex;
    this.interval = this.returnInterval();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
