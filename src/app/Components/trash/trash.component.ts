import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Output() displaytoGetAllNotes = new EventEmitter<string>();
  trashArray:any;
  
  constructor(private notesService:NoteService) { }


  ngOnInit(): void {
    this.getAllTrash();
  }
  getAllTrash(){
    this.notesService.GetNotes().subscribe((response:any)=>{
      this.trashArray=response;
      console.log("request data",response);
      this.trashArray=response.data;
      this.trashArray.reverse();
      this.trashArray=this.trashArray.filter((notedata:any)=>{
        return notedata.trash == true;
      })
    })
  }
  receiveMsgfromDisplay($event:any){
    console.log("Inside GetAllNotes",$event)
    this.getAllTrash()
  }
}