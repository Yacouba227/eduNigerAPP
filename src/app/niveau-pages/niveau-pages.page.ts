import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niveau-pages',
  templateUrl: './niveau-pages.page.html',
  styleUrls: ['./niveau-pages.page.scss'],
})
export class NiveauPagesPage implements OnInit {

  constructor(private suivant: Router) { }
  matierePage(){
    this.suivant.navigate(['/matiere-pages']);
  }

  ngOnInit() {
  }

}
