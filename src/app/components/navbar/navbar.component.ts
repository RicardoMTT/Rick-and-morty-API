import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { debounceTime, tap } from "rxjs/operators";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  searchFG: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this._buildForm();
    this._initForm();
  }

  ngOnInit(): void {}

  private _buildForm() {
    this.searchFG = this.fb.group({
      nombre: "",
      genero: null
    });
  }

  private _initForm() {
    this.searchFG
      .get("nombre")
      .valueChanges.pipe(
        debounceTime(1000),
        tap(val => {
          this._applyFilter();
        })
      )
      .subscribe();

    this.searchFG
      .get("genero")
      .valueChanges.pipe(
        debounceTime(1000),
        tap(genero => {})
      )
      .subscribe();
  }

  private _applyFilter() {
    const nombre = this.searchFG.get("nombre").value;
    this.studentService._applyFilterStudents(nombre);
  }
}
