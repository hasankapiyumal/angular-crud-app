import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-load-all-expenses-data',
  templateUrl: './load-all-expenses-data.component.html',
  styleUrls: ['./load-all-expenses-data.component.scss']
})
export class LoadAllExpensesDataComponent implements OnInit {
  expenses: Array<any> = [];

  ngOnInit(): void {
    this.loadAll();
  }

  constructor(private service: ExpensesService) {
  }


  loadAll() {
    this.service.loadAll().subscribe(response => {
      this.expenses = response;
    }, error => {
      console.log(error);
    })

  }


  delete(id: any) {
    if (confirm('are you sure')) {
      this.service.delete(id).then(response=>{
        this.expenses=response;
      }).catch(error=>{
        console.log(error);
      })
    }
  }
}
