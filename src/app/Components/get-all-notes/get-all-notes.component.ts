import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';


@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArray:any;
 
  constructor(private notesService:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.notesService.GetNotes().subscribe((request:any)=>{
      console.log("request data",request);
      this.noteArray=request.data;
      this.noteArray.reverse();
      this.noteArray=this.noteArray.filter((notedata:any)=>{
        return notedata.trash == false && notedata.archive == false;
      })
    })
  }
  receiveMsgfromDisplay($event:any){
    console.log("inside display to get all notes",$event)
    this.getAllNotes();
  }
}
