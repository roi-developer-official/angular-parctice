import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent {

  @Output() budgetAdded = new EventEmitter<{budget:Budget}>()

  onAddBudget(f:NgForm){
    const { amount, description}  = f.controls
    const id = Math.random()
    const budget:Budget = {id,amount: amount.value,description: description.value};
    this.budgetAdded.emit({budget})
  }




}
