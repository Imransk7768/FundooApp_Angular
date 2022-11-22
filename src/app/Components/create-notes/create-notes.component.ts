import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  panelOpenState = false;
  noteForm!: FormGroup;

  isShow = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private note:NoteService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  show() {
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    this.submitted = true;

    if (this.noteForm.valid) {
      let notedata = {
        title: this.noteForm.value.title,
        description: this.noteForm.value.description,
        // service: 'advance'
      }
      this.note.CreateNote(notedata).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem("token",response.data);
      })
    }
  }
}