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

export class LoginRequest{

    code: number;
    ip: string;

    public LoginRequest(code:number){
        this.code = code;
    }

}