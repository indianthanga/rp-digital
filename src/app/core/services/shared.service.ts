import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Color, Shared } from '../models/shared.model';

@Injectable()
export class SharedService {
  private colorIndex: number = 0;
  colorName: BehaviorSubject<string>;
  colorNameObservable: any;
  colorNameList: Color[];
  constructor() {
    this.colorName = new BehaviorSubject<string>("");
    this.colorNameObservable = this.colorName.asObservable();
    this.colorNameList = Shared.colors;
    if (this.colorNameList) {
      this.colorName.next(this.colorNameList[this.colorIndex].value);
    }
  }

  setColorIndex(colorIndex: number) {
    if (this.colorIndex !== colorIndex) {
      this.colorIndex = colorIndex;
      this.colorName.next(this.colorNameList[this.colorIndex].value);
    }
  }

  getColorName() {
    return this.colorName.getValue();
  }
}
