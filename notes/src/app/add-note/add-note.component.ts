import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Note} from '../../models/note.model'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent  {
  @ViewChild('f') addNoteForm: NgForm
  @ViewChild('fe') formEl
  @Output() noteAdded = new EventEmitter<{notes:Note[]}>()
  @Output() showNotes = new EventEmitter<boolean>()
  notes:Note[] = []
  description =''
  toggleForm(){
    const display = this.formEl.nativeElement.style.display
    if(display === 'none' || !display){
      this.showNotes.emit(false)
      this.formEl.nativeElement.style.display = 'flex'
    }else{
      this.showNotes.emit(true)
      this.formEl.nativeElement.style.display = 'none' 
    }
  }

  onSubmit(){
    const {title} = this.addNoteForm.controls
    const id = Math.random()
    this.notes.push({id, title: title.value, description: this.description})
    this.toggleForm()
    this.addNoteForm.reset()
    this.noteAdded.emit({notes:this.notes})
  }

}
