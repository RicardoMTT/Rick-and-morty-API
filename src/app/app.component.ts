import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./components/dialog/dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300px",
      data: {
        title: "Add character",
        name: "ricardo"
      }
    });
    dialogRef.afterClosed().subscribe(resp => {});
  }
}
