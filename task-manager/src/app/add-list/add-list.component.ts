import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent {
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter();
  @Input() title;
  @Input() id;
  
  listAdd(f: NgForm) {
    const { title } = f.controls;
    this.confirm.emit(title.value);
  }

  onAddListCancel() {
    this.cancel.emit();
  }
  
}
