import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpResponse } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    fakeUsername: string = "username";
    fakePassword: string = "password";

    constructor() {

    }

    login(username: string, password: string): Observable<any> {
        if(username == this.fakeUsername && username == this.fakePassword) {
            localStorage.setItem("token", username)
            return of(new HttpResponse( {status: 200} ))
        } else {
            return of(new HttpResponse( {status: 401} ))
        }
    }

}