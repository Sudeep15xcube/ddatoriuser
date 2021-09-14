import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

// public data:Employee={

//   sno:1,
//   name: 'john',
//   salary: 20000

// };




public data:Employee[]=[
{
  sno:1,
  name: 'john',
  salary: 20000
},
{
  sno:2,
  name: 'Kamal',
  salary: 56000
},
{
  sno:3,
  name: 'annu',
  salary: 54000
},
{
  sno:4,
  name: 'preeti',
  salary: 40000
}
];
  



  constructor() { }

public getEmployeedata():Employee[]//remove for one item
{

return this.data;
  }

}
