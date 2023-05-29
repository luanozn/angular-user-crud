import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  user: User = {
    name: 'Test User',
    registration: '2021101202010044',
    phone: '64999999999',
    email: 'luanorizona@hotmail.com'
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  createUser() : void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage("Ao goiais veeeelho sem porteraaaaaaa")  
    })
  }
}

