import { IGroup } from "../model/group";
import { IStudent } from "../model/student";
import { STUDENTS } from "./students";

export const GROUPS: IGroup[] = [
    {
        id: 1,
        name: "Группа Серег",
        students: STUDENTS.filter(item=> item.group == 1)
    },
    {
        id: 2,
        name: "Группа не Серег",
        students: STUDENTS.filter(item=> item.group == 2)
    }
]