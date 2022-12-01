import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteServices/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notesCard:any;
@Output() displaytoIcons = new EventEmitter<string>()


data:any;
noteId:any;
//isDelete:boolean=false;
isArchive:boolean=false;

isTrash: boolean = false;
isArcheive: boolean = false;

colors:Array<any> = [
{code:'#fff',name:'white'},
{code:'#f28b82',name:'red'},
{code:'#fbbc04',name:'orange'},
{code:'#fff475',name:'yellow'},
{code:'#ccff90',name:'green'},
{code:'#a7ffeb',name:'teal'},
{code:'#cbf0f8',name:'blue'},
{code:'#aecbfa',name:'darkblue'},
{code:'#d7aefb',name:'purple'},
{code:'#fdcfe8',name:'pink'},
{code:'#e6c9a8',name:'brown'},
{code:'#e8eaed',name:'gray'}
];

  constructor(public notes:NoteService, private snackBar:MatSnackBar,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let component = this.route.snapshot.component;
    if (component == TrashComponent) {
      this.isTrash = true;
    }
    if (component == ArchiveComponent) {
      this.isArcheive = true;
    }
  }
  trash(){
    let data={
      noteId:[this.notesCard.noteId],
      //isDelete:true,
    }
    console.log(data);
    this.notes.TrashNote(data).subscribe((response:any)=>{
     console.log(response);
     this.displaytoIcons.emit(response);
    })
    this.snackBar.open("note moved to trash",'',{duration:3000});
  }
  Restore() {
    let data={
      noteId:[this.notesCard.noteId],
      //isDelete:true,
    }
    console.log(data);
    this.notes.TrashNote(data).subscribe((response:any)=>{
     console.log(response);
     this.displaytoIcons.emit(response);
    })
    this.snackBar.open("Note Restored",'',{duration:3000});
  }
  Delete() {
    let data={
      noteId:[this.notesCard.noteId],
    }
    console.log(data);
    this.notes.DeleteNote(data).subscribe((response: any) => {
      console.log("Note Deleted Successfully",response);
        console.log(response)
     this.displaytoIcons.emit(response);

    })
    this.snackBar.open("Note Deleted Permanently",'',{duration:3000});
  }
  archeive(){
    let data={
      noteId:[this.notesCard.noteId],
    }
    console.log(data);
    this.notes.ArchiveNote(data).subscribe((response:any)=>{
      console.log(response);
      this.displaytoIcons.emit(response);
    })
    this.snackBar.open("Note moved to archive",'',{duration:3000});
  }
  unArcheive(){
    let data={
      noteId:[this.notesCard.noteId],
    }
    console.log(data);
    this.notes.ArchiveNote(data).subscribe((response:any)=>{
      console.log(response);
      this.displaytoIcons.emit(response);
    })
    this.snackBar.open("Note moved to Notes",'',{duration:3000});
  }

  backColor(color:any){
    this.notesCard.color=color;
    let data={
      Color:color,
      noteId:[this.notesCard.noteId],
    }
    console.log(data);
    this.notes.BackColor(data).subscribe((response:any)=>{
    console.log('color',color);
    console.log(response);
    console.log(this.notesCard);
    })
    this.snackBar.open("Background color changed to "+color,'',{duration:3000});

  }
}
