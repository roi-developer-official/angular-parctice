import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { ListsService } from '../lists.service';
import { Item } from '../models/Item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements DoCheck, OnInit{

  items:Item[] = []
  @Input() id;
  @Output() editPressed = new EventEmitter<number>()
  @Output() deletePressed = new EventEmitter<number>()
  checkedItems:number[]=[];
  constructor(private listsService:ListsService, private itemsService:ItemService){}

  ngOnInit(): void {
    this.checkedItems = this.itemsService.getCheckedItems();
  }

  checkTask(event,id){
    event.target.classList.add('clicked')
    setTimeout(()=>{
      event.target.classList.remove('clicked');
    },300)
    this.itemsService.handleItemChecked(id)
  }

  isChecked(id){
    return this.itemsService.getCheckedItems().includes(id)
  }

  ngDoCheck(): void {
    if(this.id)
      this.items = this.listsService.getItems(this.id) 
    if(!this.items){
      this.items = []
    }
  }


  editItem(id){
    this.editPressed.emit(id)
  }
  
  deleteItem(id){
    this.deletePressed.emit(id)
  }
  


}
