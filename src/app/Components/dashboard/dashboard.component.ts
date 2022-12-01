import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message:any;
  value: any;

  //subscription: Subscription;

  private _mobileQueryListener: () => void;
constructor(media: MediaMatcher,changeDetectorRef: ChangeDetectorRef, private router:Router,private dataService : DataService, private snackBar:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 60px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {
    this.dataService.searchNote.subscribe(message => this.message=message)
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
    this.snackBar.open("Logout Success",'',{duration:3000});
  }
  Refresh()
  {
    window.location.reload();
  }
  Search(event:any)
  {
    console.log("input in search ===",event.target.value)
    this.value = event.target.value
    let Ddata = {
      type:'search',
      data:[this.value]
    }
    this.dataService.changeData(Ddata);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}