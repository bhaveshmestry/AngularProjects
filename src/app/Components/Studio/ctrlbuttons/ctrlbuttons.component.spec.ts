import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlbuttonsComponent } from './ctrlbuttons.component';

describe('CtrlbuttonsComponent', () => {
  let component: CtrlbuttonsComponent;
  let fixture: ComponentFixture<CtrlbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrlbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
