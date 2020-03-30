import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  nuevo: string;
  constructor(
    public dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    public studentService: StudentService
  ) {}

  ngOnInit(): void {}

  onClickNO(): void {
    this.dialog.close();
  }
}
