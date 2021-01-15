import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Note } from 'src/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() notes:Note[];
  @Input() show:boolean;
  @Output() deleteNote = new EventEmitter<number>()

  onNoteDelete(id){
    this.deleteNote.emit(id)
  }
  

}
