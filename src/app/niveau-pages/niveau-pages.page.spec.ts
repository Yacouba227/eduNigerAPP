import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiveauPagesPage } from './niveau-pages.page';

describe('NiveauPagesPage', () => {
  let component: NiveauPagesPage;
  let fixture: ComponentFixture<NiveauPagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
