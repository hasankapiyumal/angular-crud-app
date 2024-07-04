import { Component } from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
}
