import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Output() displaytoGetAllNotes = new EventEmitter<string>();

  archiveArray:any;
  constructor(private notesService:NoteService) { }

  ngOnInit(): void {
    this.getAllAchive();
  }
  getAllAchive(){
    this.notesService.GetNotes().subscribe((response:any)=>{
      this.archiveArray=response;
      console.log("request data",response);
      this.archiveArray=response.data;
      this.archiveArray.reverse();
      this.archiveArray=this.archiveArray.filter((notedata:any)=>{
      return notedata.archive == true;
      })
    })
  }
  receiveMsgfromDisplay($event:any){
    console.log("Inside GetAllNotes",$event)
    this.getAllAchive()
  }
}
