import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatiereCourPagesPage } from './matiere-cour-pages.page';

describe('MatiereCourPagesPage', () => {
  let component: MatiereCourPagesPage;
  let fixture: ComponentFixture<MatiereCourPagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereCourPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
