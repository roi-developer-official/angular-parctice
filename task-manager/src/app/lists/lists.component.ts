import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../models/Item.model';
import { List } from '../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent{
  @Output() addListE = new EventEmitter()
  @Output() addTaskE = new EventEmitter()
  @Output() listSelected = new EventEmitter<List>()
  @Input() lists;
  @Input() selectedListItems:Item[]
  @Input() selectedList:List

  addList(){
    this.addListE.emit()
  }

  showListItems(list:List){ 
    this.listSelected.emit(list)
  }

  addTask(){
    if(this.selectedList)
       this.addTaskE.emit()
  }


}
