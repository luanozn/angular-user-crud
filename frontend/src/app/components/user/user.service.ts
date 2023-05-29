import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3001/users'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
      this.snackbar.open(
        msg, 'X', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        }
      )
  }

  create(user: User): Observable<User> {
     return this.http.post<User>(this.baseUrl, user)
  }

}
