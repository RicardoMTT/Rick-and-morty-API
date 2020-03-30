import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./components/student/student.component";

const routes: Routes = [
  {
    path: "student",
    component: StudentComponent
  },
  {
    path: "",
    redirectTo: "/student",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
