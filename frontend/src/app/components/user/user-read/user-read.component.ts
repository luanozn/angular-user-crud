import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit{

  users: User[] = []
  displayedColumns = ['registration', 'name', 'email', 'actions']

  constructor(private userService: UserService) { 

   }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(this.users)
      console.log(users)
    })
  }

}
