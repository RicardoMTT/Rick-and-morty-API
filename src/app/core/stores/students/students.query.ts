import { QueryEntity } from '@datorama/akita';
import { StudentState } from './students.state';
import { Injectable } from '@angular/core';
import { StudentStore } from './students.store';
import { switchMap } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class StudentQuery extends QueryEntity<StudentState>{

    page$ = this.select(state => state.ui.studentList.pageIds).pipe(
        switchMap(ids => this.selectMany(ids))
      );
    constructor(protected store:StudentStore){
        super(store);
    }
}