import { Component } from '@angular/core';
import { Budget } from './models/budget.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  incomes:Budget[] = []
  expensses:Budget[] =[]
  sum:number = 0
  editMode = false;
  amount:number;
  description:string;
  editBudgetId:number;

  calculateSum(){
    let calcSum = 0
    this.incomes.concat(this.expensses).map(budget=>calcSum += budget.amount)
    this.sum = calcSum
  }
  
  onBudgetAdded(input){
    const budget:Budget = input.budget
    if(budget.amount < 0) {
      this.expensses.push(budget)
    }else {
      this.incomes.push(budget)
    }
    this.calculateSum()
  }

  onBudgetDeleted({id,amount}){
    if(amount > 0){
      this.incomes = this.incomes.filter(budget=>budget.id !== id)
    }else{
      this.expensses = this.expensses.filter(budget=>budget.id !== id)
    }
    this.calculateSum()
    this.editMode = false;
  }

  onEditBudget(id){
    this.editBudgetId = id;
    let budget = this.incomes.find(budget=>budget.id === id)
    if(budget){
      this.amount = budget.amount;
      this.description = budget.description
    }else{
      budget = this.expensses.find(budget=>budget.id === id)

      this.amount = budget.amount;
      this.description = budget.description
    }
    this.editMode = true;
  }
  onEditSubmitted({amount,description}){
    let budget = {
      id: this.editBudgetId,
      amount,
      description
    }
    if(amount > 0){
      let budgetIndex = this.incomes.findIndex(budget=>budget.id === this.editBudgetId)
      if(budgetIndex >= 0){
        this.incomes[budgetIndex] = budget;
      }else{
        let budgetIndex = this.expensses.findIndex(budget=>budget.id === this.editBudgetId)
        this.expensses.splice(budgetIndex,1);
        this.incomes.push(budget)
      }
    }
      else {
        let budgetIndex = this.expensses.findIndex(budget=>budget.id === this.editBudgetId)
        if(budgetIndex >= 0){
          this.expensses[budgetIndex] = budget;
        }else{
          let budgetIndex = this.incomes.findIndex(budget=>budget.id === this.editBudgetId)
          this.incomes.splice(budgetIndex,1)
          this.expensses.push(budget)
      }
    }
    this.calculateSum()
    this.editMode = false;
  }

  onCancelEdit(){
    console.log('object');
    this.editMode = false;
 
  }

}

