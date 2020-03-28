import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private apiService: ApiService) { }

  /**
   * getLevels
   */
  public getLevels() {
    return this.apiService.get("levels",null);
  }

  /**
   * Obtenir la liste d'exercices pour un certain niveau.
   * @param levelID ID du niveau pour lequel nous voulons obtenir les exercices.
   */
  public getExercices(levelID) {
    return this.apiService.get("levels/exercices", {"levelID":levelID});
  }
}
