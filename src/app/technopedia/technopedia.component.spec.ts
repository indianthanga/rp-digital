import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnopediaComponent } from './technopedia.component';

describe('TechnopediaComponent', () => {
  let component: TechnopediaComponent;
  let fixture: ComponentFixture<TechnopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnopediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
