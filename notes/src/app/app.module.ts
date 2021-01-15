import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { NotesComponent } from './notes/notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
