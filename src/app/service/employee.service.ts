import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../model/api.response";
import {Employee} from "../model/employee.model";
const API_URL = `${environment.apiUrl}/employees`;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAll(page: number, size: number):Observable<any>{
    return this.http.get<any>(API_URL+`?page=${page}&size=${size}`);
  }
  getEmployeeById(id : number):Observable<any>{
    return  this.http.get(API_URL+'/'+id);
  }
  createEmployee(employee : Employee):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(API_URL,employee)
  }
  updateEmployee(id: number,employee : Employee) :Observable<any>{
    return this.http.put<any>(API_URL+'/'+employee.id,employee)
  }
  deleteEmployee(id : number):Observable<ApiResponse>{
    return  this.http.delete(API_URL+'/'+id);
  }
}
