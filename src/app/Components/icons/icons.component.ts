import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notesCard:any;

data:any;
noteId:any;
//isDelete:boolean=false;
isArchive:boolean=false;

  constructor(public notes:NoteService) { }

  ngOnInit(): void {
  }
  trash(){
    let data={
      noteId:[this.notesCard.noteId],
      //isDelete:true,
    }
    console.log(data);
    this.notes.TrashNote(data).subscribe((response:any)=>{
      console.log(response);
    })
  }
  archeive(){
    let data={
      noteId:[this.notesCard.noteId],
    }
    console.log(data);
    this.notes.ArchiveNote(data).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
