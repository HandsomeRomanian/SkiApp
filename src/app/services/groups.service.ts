import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private apiService: ApiService) { }

  /**
   * getGroupByID
   */
  public getGroupByID(groupID) {
    return this.apiService.get("group",{"groupID":groupID});
  }

  /**
   * getGroupsByLevel
   */
  public getGroupsByLevel(levelID) {
    return this.apiService.get("levels/groups",{"levelID":levelID});    
  }
}
