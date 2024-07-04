import {Injectable} from "@angular/core";
import {Route, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Expense} from "./Expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private router: Router, private store: AngularFirestore) {
  }

  createData(expense:Expense):Promise<any>{
    let id = this.store.createId();
    return this.store.doc(`expenses/${id}`).set({...expense,id});

  }
}
