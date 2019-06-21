import { Component } from '@angular/core';
import { EmpService } from './emp.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp';

 Employee= {
    "employeeName":'',
    "employeeEmail": '',
    "employeeAddress": '',
    "employeeSalary": ''
}
onSubmit() {
  console.log("Employee----->",this.Employee);
  alert("Ok")
}
createEmployee(Employee){
  console.log("EmployeeService------>",this.Employee);

}
}
