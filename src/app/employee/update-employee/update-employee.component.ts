import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee.model";
import {ApiResponse} from "../../model/api.response";
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number=0;
  employee: Employee={};
  apiResponse?: ApiResponse;
  constructor(private employeeService:EmployeeService,private router : Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employee={};
    this.id = +this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{console.log(data)
    this.employee=data},
    error=>console.log(error))

  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(
      ()=> {
        alert("Update thanh cong")
        this.employee={};
        this.router.navigate(['/list'])
      },
      error => alert("Update that bai"));
  }

}
