import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class ItemService{

    checkedItems:number[] = []

    getCheckedItems(){
        return this.checkedItems;
    }

    handleItemChecked(id){
        if(this.checkedItems.includes(id)){
            let index = this.checkedItems.indexOf(id)
            this.checkedItems.splice(index,1)
          } else {
            this.checkedItems.push(id)
          }
    }

}