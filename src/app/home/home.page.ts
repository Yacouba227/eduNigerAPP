import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private suivant: Router) {}
  LoginPage(){
    this.suivant.navigate(['/login-page']);
  }
siginPage(){
  this.suivant.navigate(['/sigin-page']);
  }
}
