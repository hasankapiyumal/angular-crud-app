import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ExpensesContextComponent } from './components/expenses-context/expenses-context.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';
import {MatButtonModule} from "@angular/material/button";
import { NewExpensesDataComponent } from './components/expenses-context/items/new-expenses-data/new-expenses-data.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FindExpensesDataComponent } from './components/expenses-context/items/find-expenses-data/find-expenses-data/find-expenses-data.component';
import { UpdateExpenseDataComponent } from './components/expenses-context/items/update-expense-data/update-expense-data.component';
import { LoadAllExpensesDataComponent } from './components/expenses-context/items/load-all-expenses-data/load-all-expenses-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    ExpensesContextComponent,
    SalaryContextComponent,
    LoanContextComponent,
    NewExpensesDataComponent,
    FindExpensesDataComponent,
    UpdateExpenseDataComponent,
    LoadAllExpensesDataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
