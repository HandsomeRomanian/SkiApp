export class Student {

    id;
    Name: string;
    Status: number;
    Other;
}

export class Exercices {

    id;
    description: string;
    terrain: string;
    type: number;
    levelId: number;
}

export class Level {

    levelId: number;
    name: string;
    description: string;
    nextLevelId: number;
    exercices: Exercices[] = [];
}


export class Group {

    id;
    Number;
    Level;
    Time;
    TeacherName;
    day;
    Students: Student[];

}

export class LoginRequest {

    userID: number;
    password: string;
    constructor(userID: number, password: string) {
        this.userID = userID;
        this.password = password;
    }

}


export class LoginResponse {

    employe: Employe;
    token: string;

}

export class Employe {

    userId: number;

    firstName: string;
  
    lastName: string;
  
    password: string;
  
    departementstaffs: any[];
  
    groups: Group[];
}
