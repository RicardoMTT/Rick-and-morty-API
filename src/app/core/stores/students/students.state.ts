import { Student } from '../../../models/student.model';
import { ID, EntityState } from '@datorama/akita';

export interface StudentState extends EntityState<Student>{
    ui:{
        studentList:{
            query?:string | { [fiter:string] :string};
            currentPage?:number;
            pageSize?:number;
            hasReachedLimit?:boolean;
            pageIds?:ID[];
        };
    };
}