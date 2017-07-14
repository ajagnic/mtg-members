import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) { }

  gotoHome() {
    this.router.navigate(['']);
  }

  gotoAbout() {
    this.router.navigate(['about']);
  }

  gotoMembers() {
    this.router.navigate(['members']);
  }

  gotoAdmin() {
    this.router.navigate(['admin']);
  }
}
