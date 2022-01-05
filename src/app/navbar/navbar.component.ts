import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//
import {getAppNames, navigateToUrl, getMountedApps} from "single-spa";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'Tic Tac Toe';
  isAuthenticated = false;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    console.log('ngOnInit appNames', getAppNames());
    console.log('ngOnInit mountedAppNames', getMountedApps());
  }

  async logout(): Promise<void> {
    // todo
  }


  public singleSpaNavigateUrl(url: string) {
    navigateToUrl('/' + url);
  }

}
