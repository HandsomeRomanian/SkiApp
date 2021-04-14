
export class User {
    userId: number;
    firstName: string;
    lastName: string;
    password: string;
    departementstaffs: Departementstaff[];
    groups: Group[];
    logins: any[];
}


export class Student {

    studentId: number;
    lastName: string;
    firstName: string;
    phone: number;
    groupId: number;
    status: number;
    special: string | null;
    student: Student;
    group: Group;

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

    groupId: number;
    levelId: number;
    number: string;
    time: string;
    day: number;
    teacherId: number;
    nbStudents: number;
    departementId: number;
    departement: Departement;
    level: Level;
    teacher: User;
    studentgroups: Student[];

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
    employe: User;
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

export class Departement {

    departementId: number;
    departementName: string;
    limiteEtudiantsGroupe: number;
    levels: Level[];
    departementpermissionroles: Departementpermissionrole[];
    departementstaffs: Departementstaff[];
    groups: Group[];
}

export class Departementstaff {

    userId: number;
    departementId: number;
    roleId: number;
    role: Departementrole;
    departement: Departement;
    user: User;
}

export class Departementrole {

    roleId: number;
    roleName: string;
    departementpermissionroles: Departementpermissionrole[];
    departementstaffs: Departementstaff[];
}

export class Departementpermissionrole {

    permissionRoleId: number;
    departementId: number;
    permissionId: number;
    roleId: number;
    role: Departementrole;
    departement: Departement;
    permission: Departementpermission;
}

export class Departementpermission {
    permissionId: number;
    permissionName: string;
    permissionDescription: string;
    departementpermissionroles: Departementpermissionrole[];
}
