import { Injectable } from "@angular/core";
import { StudentStore } from "../core/stores/students/students.store";
import { StudentApi } from "../core/api/student.api";
import { tap } from "rxjs/operators";
import { Student } from "../models/student.model";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(
    private studentStore: StudentStore,
    private apiStudent: StudentApi
  ) {}

  public initializarStudent() {
    this.studentStore.setLoading(true);
    this.apiStudent
      .getStudent()
      .pipe(
        tap((result: any) => {
          this.studentStore.upsertMany(result.results);
        }),
        tap(_ => this.studentStore.setLoading(false)),
        tap(() => {
          this.applyFiltersToStarsList("", null);
        })
      )
      .subscribe();
  }

  public applyFiltersToStarsList(name: string, gender: any) {
    this._applyFilterStudents(name);
  }

  public _applyFilterStudents(query: string) {
    this.apiStudent
      .getPage(query)
      .pipe(
        tap(({ data, count }) => {
          const newPagesIds = data.map(e => e.id);
          this.studentStore.updateList({
            currentPage: 1,
            hasReachedLimit: newPagesIds.length === count,
            pageIds: newPagesIds,
            query: ""
          });
        })
      )
      .subscribe();
  }

  public __addStudent(name: string) {
    const student: Student = {
      id: 1,
      name: name,
      gender: "Male"
    };
    this.apiStudent.postStudent(student);
  }
}
