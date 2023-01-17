import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDownloadComponent } from './ads-download.component';

describe('AdsDownloadComponent', () => {
  let component: AdsDownloadComponent;
  let fixture: ComponentFixture<AdsDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
