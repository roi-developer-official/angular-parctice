import { Component } from '@angular/core';
import { Item } from './models/Item.model';
import { List } from './models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  addTitle:string;
  lists:List[] = [];
  items:Item[] = []
  selectedListId:number;
  showAddList = false;
  showAddTask = false;
  showEditList = false;
  selectedList:List;

  onSelectedList(list:List){
    this.selectedList = list
    this.items = list.items
  }


  onAddHandler(){
    this.addTitle = 'Select a name for a list'
    this.showAddList = true;
  }
  
  onAddTaskHandler(){
    this.showAddTask = true;
    this.addTitle = 'Write a description to your task'
  }
  onAddConfirm(title:string){
    if(this.showAddList){
      const list:List = {
        id: Math.random(),
        title: title,
        items:[]
      }
      this.lists.push(list)
      this.showAddList = false;
    }else if(this.showAddTask){
      let item:Item = {
        id: Math.random(),
        description: title, 
      }
      this.selectedList.items.push(item)
      this.showAddTask = false;
    }

  }

  cancelAdd(){
    this.showAddList = false;
  }

  
}
