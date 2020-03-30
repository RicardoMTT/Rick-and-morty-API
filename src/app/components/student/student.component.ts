import { Component, OnInit } from "@angular/core";
import { StudentService } from "../../services/student.service";
import { StudentQuery } from "src/app/core/stores/students/students.query";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    public studentQuery: StudentQuery
  ) {}

  ngOnInit(): void {
    this.studentService.initializarStudent();
  }
}
