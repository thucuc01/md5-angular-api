import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";

import {Employee} from "../../model/employee.model";

declare var $:any;
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  id?: number;
  page = 0;
  size = 5;
  employees : Employee []=[];
  constructor(private employeeService:EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.getAll(this.page, this.size);

  }

  getAll(page: number, size: number){
    this.employeeService.getAll(page, size).subscribe(value => {
      this.employees= value.data;
    },val=>console.log(val))
  }

  next(){
    this.page ++;
    this.getAll(this.page, this.size);
  }
  back(){
    this.page --;
    this.getAll(this.page,this.size);
  }

  deleteEmployee(id:number|undefined){
    if(id != undefined) {
      this.employeeService.deleteEmployee(id).subscribe(
        ()=>{this.getAll(this.page,this.size);
          alert("Xoa thanh cong")}
      )
    }
  }
  updateEmployee(id:number|undefined){
    if(id != undefined) {
      this.router.navigate(['/update', id])
    }

  }
  // openPopup(id:number|undefined){
  //   if(id!=undefined){
  //     this.id=id;
  //     // $('#showForm').modal('show');
  //     $(document).ready(function (){
  //       $('.btn').click(function () {
  //         $('#modal').css("display","block");
  //       })
  //       $('#close').click(function () {
  //         $('#modal').css("display","none");
  //       })
  //     })
  //   }
  // }
  // deleteEmployee(){
  //   if(this.id != undefined) {
  //     this.employeeService.deleteEmployee(this.id).subscribe(
  //       ()=>{this.getAll(this.page,this.size);
  //         alert("Xoa thanh cong")}
  //     )
  //   }
  // }
}

