import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data/data.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  noteArray:any;
  msg:any;
  panelopenstate=false;
  show=false;

  submitted=false;
  subscription: any;
  message: any;
  searchWord:any
  constructor(private dialog:MatDialog,private sdata:DataService) { }
  @Input() NotesList:any;
  @Output() displaytoGetAllNotes = new EventEmitter<string>();


  ngOnInit(): void {
        this.sdata.searchNote.subscribe(message=>{
          this.message=message; 
      console.log("Searching Notes =",message.data[0]);
      this.searchWord = message.data[0]
    });
  }

  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent,
      {
      width: '40%',
      height: 'auto',
      panelClass: 'updateDialog',
      data:notes,
    });
      dialogRef.afterClosed().subscribe(result=>{
      console.log('the Dialog was Closed',result);
    })
  }
  receiveMsgIconsToDisplay($event:any){
    console.log("msg icon to display",$event)
    this.msg = $event;
    this.displaytoGetAllNotes.emit(this.msg);
  }
}
