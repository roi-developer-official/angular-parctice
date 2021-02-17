import { Injectable } from "@angular/core"
import { Item } from "./models/Item.model"
import { List } from "./models/list.model"

@Injectable({providedIn: 'root'})
export class ListsService{
    
  lists:List[] = []
    getLists(){
        return this.lists
    }
    addList(title){
        const list:List = {
            id: Math.random(),
            title: title,
            items:[]
          }
          this.lists.push(list)
          return this.lists
    }
    addItemToAList(listId:number ,item:Item){
        const list = this.lists.find(list=>list.id === listId)
        list.items.push(item)
        return this.lists
    }
    getItems(listId){
        const list = this.lists.find(list=>list.id === listId)
        if(list)
         return list.items
    }
    editList(id,title){
        const list = this.lists.find(list=>list.id === id)
        list.title = title
        return this.lists
    }
    deleteList(id){
        this.lists = this.lists.filter(list=>list.id !== id)
        return this.lists
    }
    editTask(listId, itemId,title){
        const list = this.lists.find(list=>list.id === listId)
        const item = list.items.find(item=> item.id === itemId)
        item.description = title
        return this.lists
    }
    deleteTask(listId, itemId){
        const list = this.lists.find(list=>list.id === listId);
        list.items = list.items.filter(item=> item.id !== itemId)
        return this.lists
    }
}