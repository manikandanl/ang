import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  postUrl = 'http://localhost:3000/Employee/add';
  constructor(private http: HttpClient) { }
  createEmployee(Employee){
    return this.http.post(this.postUrl,Employee)
  }
}
