import { Component } from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Expense} from "../../Expense";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-update-expense-data',
  templateUrl: './update-expense-data.component.html',
  styleUrls: ['./update-expense-data.component.scss']
})
export class UpdateExpenseDataComponent {
  constructor(private service: ExpensesService) {
  }

  expensesDataForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required),
  });

  findData() {

    this.service.findDataById(this.expensesDataForm.get('id')?.value!).subscribe(response => {
      this.expensesDataForm.patchValue({
        title:response.title,
        description:response.description,
        cost: response.cost
      })
      console.log(response);
    },error => {
      console.log(error);
    })
  }
  update(){
    let data: Expense = {
      'id':this.expensesDataForm.get('id')?.value!,
      'title': this.expensesDataForm.get('title')?.value!,
      'description': this.expensesDataForm.get('description')?.value!,
      'cost': this.expensesDataForm.get('cost')?.value!,
    }

    this.service.updateData(data).then(response => {
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })
  }
}
