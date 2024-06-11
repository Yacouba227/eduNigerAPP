import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatierePagesPage } from './matiere-pages.page';

describe('MatierePagesPage', () => {
  let component: MatierePagesPage;
  let fixture: ComponentFixture<MatierePagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatierePagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
