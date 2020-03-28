import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }

  getStudent() {

  }

  getStudentsLevel() {

  }

  getStudentsGroup() {

  }

  getUpgrade(studentID, groupID) {
    return this.apiService.get("upgrade", { "studentID": studentID, "groupID": groupID })
  }

  getDowngrade(studentID, groupID) {
    return this.apiService.get("downgrade", { "studentID": studentID, "groupID": groupID })
  }

  public getStatusList() {
    return this.apiService.get("status", null);
  }

  /**
   * Cherche un etudiant par son nom parmis les etudiants de nos departements.
   * @param input Nom de l'etudiant a rechercher
   */
  public search(input) {
    input = input.trim().replace(" ", "_");
    return this.apiService.get("search", { "input": input });
  }

  upgrade(studentID, groupID) {
    return this.apiService.post("upgrade", { "studentID": studentID, "groupID": groupID }).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  downgrade(studentID, groupID) {
    return this.apiService.post("downgrade", { "studentID": studentID, "groupID": groupID }).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  setStatus(student) {
    return this.apiService.post("status", student)
  }
}
