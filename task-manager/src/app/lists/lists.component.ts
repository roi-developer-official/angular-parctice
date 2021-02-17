import { Component, ElementRef, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

import { Item } from '../models/Item.model';
import { List } from '../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  showSettings = false;
  title:string = '';
  show:boolean = true;
  selectedListId:number;
  selectedItemId:number;
  lists:List[] = []
  checked:number[] = []
  mode:string;

  constructor(private listsService:ListsService){}

  showListItems(id){
    this.selectedListId = id
  }

  addListTriggered(){
    this.show = false
    this.title = 'add a title to the list'
    this.mode = 'add-list'
  }

  editListTriggered(){
    if(this.selectedListId){
    this.show = false;
    this.title = 'add a title to the list'
    this.mode = 'edit-list'
    }
  }
  addTaskTriggerd(){
    this.mode = 'add-task'
    this.title = 'add a description to the task'
    this.show = false
  }
  deleteListTriggered(){
    if(this.selectedListId)
       this.lists = this.listsService.deleteList(this.selectedListId)
  }
  editTaskTriggered(id:number){
    this.selectedItemId = id
    this.mode = 'edit-task';
    this.title = 'add a description to the task'
    this.show = false
  }
  deleteTaskTriggred(id:number){
    this.lists = this.listsService.deleteTask(this.selectedListId,id)
  } 
  onConfirm(title:string){
    switch(this.mode){
      case 'add-list':
        this.lists = this.listsService.addList(title)
        break;
      case 'add-task':
        let item:Item = {
        id: Math.random(),
        description: title, 
      }
       this.lists = this.listsService.addItemToAList(this.selectedListId, item)
       break;
       case 'edit-list':
         if(this.selectedListId)
            this.listsService.editList(this.selectedListId,title)
        break;
      case 'edit-task':
        this.lists = this.listsService.editTask(this.selectedListId, this.selectedItemId,title)
        break;
    }
      this.show = true
  }
  onCancel(){
      this.show = true;
  }
  toggleSettings(){
    this.showSettings = !this.showSettings
  }
  onBlur(){
    this.showSettings = false;
  }
  onSettingsClicked(action){
    console.log(action);
  }
}
