import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-page',
  templateUrl: './sigin-page.page.html',
  styleUrls: ['./sigin-page.page.scss'],
})
export class SiginPagePage implements OnInit {

  constructor(private suivant: Router) { }
  niveauPage(){
    this.suivant.navigate(['/niveau-pages']);
  }

  ngOnInit() {
  }

}
