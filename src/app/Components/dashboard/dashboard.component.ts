import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
constructor(media: MediaMatcher,changeDetectorRef: ChangeDetectorRef, private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
  }
  Notes(){
    this.router.navigateByUrl('/dashboard/notes')
  }
  Trash(){
    this.router.navigateByUrl('/dashboard/trash')
  }
  Archive(){
    this.router.navigateByUrl('/dashboard/archive')
  }
  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}