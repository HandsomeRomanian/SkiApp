export class Student{

    id;
    Name;
    Status;
    Other;
}

export class Groupe{

    id;
    Number;
    Level;
    Time;
    TeacherName;
    day;
    Students: Student[];

}