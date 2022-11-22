import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  panelopenstate=false;
  show=false;

  submitted=false;
  title:any;
  discription:any;

  constructor() { }
  @Input() NotesList:any;

  ngOnInit(): void {
  }
  
}
