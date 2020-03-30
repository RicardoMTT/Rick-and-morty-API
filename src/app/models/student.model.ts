import { ID } from "@datorama/akita";

export class Student {
  id: ID;
  name?: string;
  gender?: string;

  constructor(id, name, gender) {
    this.id = id;
    this.name = name;
    this.gender = gender;
  }
}
