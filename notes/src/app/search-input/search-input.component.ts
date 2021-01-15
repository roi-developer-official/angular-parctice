import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Output() searchVal = new EventEmitter<string>()

  inputChangehandler(e){
    this.searchVal.emit(e.target.value)
  }

}
