import { Component } from '@angular/core';
import { Note } from 'src/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent   {
  notes: Note[] = []
  show:boolean = true
  tempNotes:Note[] = []

  onNoteAdded(notes) {
    this.notes = [...notes.notes];
    this.tempNotes = this.notes
  }

  setShowNotes(show){
    this.show = show
  }

  searchValChanged(val){
    this.notes = this.tempNotes
    this.notes = this.notes.filter(note=>{
      if(note.title.startsWith(val) || note.description.includes(val)){
        return note;
      }
    })
  }

  onNoteDeleted(id){
    this.notes = this.notes.filter(note=>note.id !== id)
    this.tempNotes = this.notes
  }

}
