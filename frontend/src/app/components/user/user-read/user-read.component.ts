import { HeaderService } from '../../template/header/header.service';
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
  displayedColumns = ['login', 'name', 'email', 'actions']

  constructor(private userService: UserService, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Usuários',
      icon: 'verified_user',
      routeUrl:'/users'
    }
   }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(this.users)
      console.log(users)
    })
  }

}
