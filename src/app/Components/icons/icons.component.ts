import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

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
     this.displaytoIcons.emit(response);
    })
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
  }
}
