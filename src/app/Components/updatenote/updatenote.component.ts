import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  title: any;
  description:any;
  id:any;

  constructor(private note:NoteService,public dialogRef:MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) 
    {
      this.title=data.title;
      this.description=data.description;
      this.id=data.noteId;
    }
   @Input() NotesList:any;

   onNoClick(): void{
    this.dialogRef.close();
  }
  ngOnInit(): void {}
 
  closeDialog() {
    let payload= {
      title:this.title,
      description:this.description,
      noteId:this.id
    }
    console.log(payload);
    this.note.UpdateService(payload).subscribe((response:any)=>{
    console.log(response);
    this.dialogRef.close(response);
  })
   this.dialogRef.close()
  }
}
