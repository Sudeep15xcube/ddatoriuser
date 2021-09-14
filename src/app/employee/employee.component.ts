import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  term:any="";
p:number=1;

 public data:Employee[]= [];
// public data:Employee = {} as Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.data = this.employeeService.getEmployeedata();
  }

}
