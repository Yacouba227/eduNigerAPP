import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere-pages',
  templateUrl: './matiere-pages.page.html',
  styleUrls: ['./matiere-pages.page.scss'],
})
export class MatierePagesPage implements OnInit {

  constructor(private suivant: Router) { }
  matiereCourPage(){
    this.suivant.navigate(['/matiere-cour-pages']);
  }

  ngOnInit() {
  }

}
