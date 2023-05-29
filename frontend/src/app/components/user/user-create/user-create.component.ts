import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  createUser() : void {
    this.userService.showMessage("Ao goiais veeeelho sem porteraaaaaaa")    
  }
}

