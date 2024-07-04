import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {DashboardContextComponent} from "./components/dashboard-context/dashboard-context.component";
import {DefaultComponent} from "./components/default/default.component";
import {ExpensesContextComponent} from "./components/expenses-context/expenses-context.component";
import {LoanContextComponent} from "./components/loan-context/loan-context.component";
import {SalaryContextComponent} from "./components/salary-context/salary-context.component";
import {
  NewExpensesDataComponent
} from "./components/expenses-context/items/new-expenses-data/new-expenses-data.component";

const routes: Routes = [{ path: '', component: DashboardComponent,children:[
    {path:'',redirectTo:'dashboard/process/home',pathMatch:'full'},
    {path:'process',component:DashboardContextComponent,children:[
        {path:'home',component:DefaultComponent},
        {path:'expenses',component:ExpensesContextComponent,children:[
            {path:'new',component:NewExpensesDataComponent}
          ]},
        {path:'loan',component:LoanContextComponent},
        {path:'salary',component:SalaryContextComponent},
      ]},

  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
