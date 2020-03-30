import { EntityStore, StoreConfig } from '@datorama/akita';
import { StudentState } from './students.state';
import { Injectable } from '@angular/core';


@StoreConfig({name:'students'})
@Injectable({providedIn:'root'})
export class StudentStore extends EntityStore<StudentState>{

    constructor(){
        super({
            ui:{
                studentList:{
                    query:'',
                    currentPage:1,
                    pageSize:6,
                    hasReachedLimit:false,
                    pageIds:[]
                }
            }
        });
    }

    

  updateList(payload: StudentState['ui']['studentList']) {
    this.update({
      ui: {
        ...this.getValue().ui,
        studentList: payload
      }
    });
  }
}