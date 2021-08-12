import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  contents: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/files/contents/data.json').subscribe((data) => {
      this.contents = data;
    });
  }

  collapseTopic(tIndex: number): void {
    if (this.contents) {
      this.contents.forEach(function (topic: any, topicIndex: any) {
        if (tIndex === topicIndex) {
          topic.children.forEach(function (year: any, yearIndex: any) {
            year.collapsed = true;
            year.children.forEach(function (month: any, monthIndex: any) {
              month.collapsed = true;
            });
          });
        }
      });
    }
  }

  collapseYear(tIndex: number, yIndex: number): void {
    if (this.contents) {
      this.contents.forEach(function (topic: any, topicIndex: any) {
        if (tIndex === topicIndex) {
          topic.children.forEach(function (year: any, yearIndex: any) {
            if (yIndex === yearIndex) {
              year.children.forEach(function (month: any, monthIndex: any) {
                month.collapsed = true;
              });
            }
          });
        }
      });
    }
  }
}
