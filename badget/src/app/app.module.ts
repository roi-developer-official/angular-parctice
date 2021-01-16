import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FormsModule } from '@angular/forms';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBudgetComponent,
    BudgetsComponent,
    EditBudgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
