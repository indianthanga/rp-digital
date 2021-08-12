import { ElementRef, HostListener, Inject } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedService } from 'src/app/core/services/shared.service';
import { Color, Shared } from 'src/app/core/models/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Technopedia';
  languageDisplay: boolean = false;
  authorDisplay: boolean = false;
  colorDisplay: boolean = false;
  menuDisplay: boolean = false;
  fullScreen: boolean = false;
  colorName: string;
  colorList: Color[] = [];
  element: any = "";
  constructor(
    @Inject(DOCUMENT) private document: any,
    private sharedService: SharedService
  ) {
    this.colorList = Shared.colors;
    this.colorName = sharedService.getColorName();
    /*this.sharedService.colorNameObservable.subscribe((value: string) => {
      console.log(value);
    });*/ 
  }

  changeColor(index: number): void {
    this.sharedService.setColorIndex(index);
  }

  @HostListener('document:click', ['$event']) onDocumentClick() {
    this.authorDisplay = false;
    this.languageDisplay = false;
    this.colorDisplay = false;
  }

  ngOnInit(): void {
    this.element = this.document.documentElement;
  }
  fullScreenToggle(): void {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) this.openFullScreen();
    else this.closeFullScreen();
  }
  openFullScreen(): void {
    if (this.element.requestFullscreen) {
      this.element.requestFullscreen();
    } else if (this.element.mozRequestFullScreen) {
      /* Firefox */
      this.element.mozRequestFullScreen();
    } else if (this.element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.element.webkitRequestFullscreen();
    } else if (this.element.msRequestFullscreen) {
      /* IE/Edge */
      this.element.msRequestFullscreen();
    }
  }

  closeFullScreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmode() {
    if (
      this.document.fullscreenElement ||
      this.document.mozFullScreenElement ||
      this.document.webkitFullscreenElement ||
      this.document.msFullscreenElement
    ) {
      this.fullScreen = true;
    } else this.fullScreen = false;
  }
}
