import { User } from './user.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://spring-mail-sender-production.up.railway.app/users'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
      this.snackbar.open(
        msg, 'X', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: ['msg-success']
        }
      )
  }

  create(user: User): Observable<User> {


    const body = {
      "login": user.login,
      "password": "mock",
      "name": user.name,
      "email": user.email,
      "phone": user.phone
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });


    return this.http.post<User>(this.baseUrl, user, { headers });
  }


  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  readById(id:string): Observable<User>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.login}`
    return this.http.put<User>(url, user)
  }

  delete(id:string): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<User>(url)
  }
}
