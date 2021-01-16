import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent {
  @Input() amount;
  @Input() description;
  @Output() budgetEditted = new EventEmitter<{amount:number, description:string}>()
  @Output() closeEditing = new EventEmitter()

  onSubmit(form:NgForm){
    const {amount,description} = form.controls;
    let budget = {
      amount: amount.value,
      description: description.value
    }
    this.budgetEditted.emit(budget) 
  }

  closeEdit(){
    console.log('object');
    this.closeEditing.emit()
  }


}
