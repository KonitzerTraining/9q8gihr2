import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data';
import { Observable, delay, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUser(login: LoginData): Observable<User> {
    console.log('AuthService.getUser', login);

    return of({
      id: 4,
      username: 'Tim Taler'
    }).pipe(
      // simulate network delay
      delay(2000)
    )
  }
}
