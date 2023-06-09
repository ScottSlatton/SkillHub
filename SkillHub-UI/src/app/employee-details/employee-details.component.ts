import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;
  myHttpError: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router){}


  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];

    this.employee = new Employee()
    this.employeeService.getEmployeeById(this.id).subscribe(data => {this.employee = data}, error => this.myHttpError = error.error);

  }

  public updateEmployee(id: number){
    this.router.navigate(["update-employee", id])
  }
  public deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {console.log(data)});
  }



}
