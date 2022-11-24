import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token=localStorage.getItem('token')
   }

  CreateNote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer '+this.token
      })
    }
    return this.httpservice.postService('/Notes/Create', reqdata, true, header);
  }
  GetNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer '+this.token
      })
    }
    return this.httpservice.getService('/Notes/Retrieve',true,header);
  }
  UpdateService(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer '+this.token
      })
    }
    return this.httpservice.putService(`/Notes/Update?notesId=${data.noteId}`,data,true,header);
  }
  TrashNote(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer '+this.token
      })
    }
    return this.httpservice.putService(`/Notes/Trash?noteId=${data.noteId}`,data,true,header);
  }
  ArchiveNote(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'bearer '+this.token
      })
    }
    return this.httpservice.putService(`/Notes/Archieve?noteId=${data.noteId}`,data,true,header);
  }
}
