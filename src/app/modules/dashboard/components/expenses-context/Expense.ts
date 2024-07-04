import firebase from "firebase/compat";

export interface Expense{
  id?:string;
  title:string;
  description:string;
  cost:number;
}
