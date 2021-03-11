import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import {Employee} from "../../model/employee.model";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee ={};
  // submidtted = false;
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    // this.submidtted=true;
    if(!form.invalid){

      this.employeeService.createEmployee(this.employee).subscribe(
        ()=> {
          alert("thanh cong")
          this.employee = {};
          this.router.navigate(['/list'])
        }
        ,() => alert("that bai"));
    }


  }


}
