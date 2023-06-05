import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  greenDarkStyle: any

  user: User = {
    name: '',
    login: '',
    phone: '',
    email: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.greenDarkStyle = {
        background:"#568203"
      }
  }

  createUser() : void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage("Usuário criado com sucesso!")  
    })
  }
}

