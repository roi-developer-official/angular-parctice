import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent{
  @Input() incomes:Budget[] = []
  @Input() expensses:Budget[] = []
  @Output() onEditBudget = new EventEmitter<number>()
  @Output() onDeleteBudget = new EventEmitter<{id:number,amount:number}>()
  
  editBudget(id){
    this.onEditBudget.emit(id)
  }

  deleteBudget(event,id,amount){
    this.onDeleteBudget.emit({id,amount})
    event.stopPropagation()
  }

}
