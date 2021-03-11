import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {EmployeesListComponent} from "./employee/employees-list/employees-list.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'add',component: CreateEmployeeComponent},
  {path:'list',component: EmployeesListComponent},
  {path:'update/:id',component: UpdateEmployeeComponent},
  {path:'delete/:id',component: EmployeesListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
