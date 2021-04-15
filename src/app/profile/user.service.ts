import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private authService: AuthService
  ) { }
}
