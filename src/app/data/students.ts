import { formatDate } from "@angular/common";
import { IStudent } from "../model/student";

export const STUDENTS: IStudent[] = [
    {
        id: 1,
        name: "Серега",
        birthdate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        number: 23,
        group: 1
    },
    {
        id: 2,
        name: "Not Серега",
        birthdate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        number: 24,
        group: 2
    },
    {
        id: 3,
        name: "Артем",
        birthdate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        number: 24,
        group: 2
    }
]