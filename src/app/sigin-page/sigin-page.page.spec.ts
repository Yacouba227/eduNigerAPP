import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiginPagePage } from './sigin-page.page';

describe('SiginPagePage', () => {
  let component: SiginPagePage;
  let fixture: ComponentFixture<SiginPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
