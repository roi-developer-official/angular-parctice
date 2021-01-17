import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from '../models/list.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent {
  @Output() addList = new EventEmitter<string>();
  @Output() cancelAdd = new EventEmitter();
  @Input() title;
  @Input() id;

  listAdd(f: NgForm) {
    const { title } = f.controls;
    this.addList.emit(title.value);
  }

  onCancelAdd() {
    this.cancelAdd.emit();
  }
}
