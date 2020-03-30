import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Student } from "src/app/models/student.model";
import { StudentQuery } from "../stores/students/students.query";
import { of, Observable } from "rxjs";

const URL = "https://rickandmortyapi.com/api/character";
@Injectable({
  providedIn: "root"
})
export class StudentApi {
  constructor(private http: HttpClient, private studentQuery: StudentQuery) {}

  getStudent() {
    return this.http.get(URL).pipe(map(resp => resp));
  }

  getStudentOnly(query: string) {
    const student = this.studentQuery.getAll();
    return student.filter(e =>
      e.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getPage(query: string) {
    const filterList = this.getStudentOnly(query);
    return of({
      count: filterList.length,
      data: filterList
    });
  }

  postStudent(student: Student) {}
}
