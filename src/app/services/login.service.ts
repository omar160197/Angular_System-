import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  isAuth(): boolean {
    if (localStorage.getItem('token')) return true;
    return false;
  }

  constructor() { }
}
