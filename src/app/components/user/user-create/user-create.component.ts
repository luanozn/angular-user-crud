import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service'
import { HeaderService } from '../../template/header/header.service';

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

  clearFields(): void {
    this.user.name = '',
    this.user.login = '',
    this.user.phone = '',
    this.user.email = ''
  }


  constructor(private userService: UserService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Criação de Usuários',
      icon: 'add_to_queue',
      routeUrl:'/users/delete'
    }
  }

  ngOnInit(): void {
      this.greenDarkStyle = {
        background:"#568203"
      }
  }

  createUser() : void {
    this.userService.create(this.user).subscribe(
      response => {
        this.userService.showMessage("Usuário criado com sucesso!");
        this.clearFields();
      },
      error => {
        if (error.status === 400) {
          this.userService.showMessage("Matrícula já registrada");
        } else {
          this.userService.showMessage("Ocorreu um erro na requisição.");
        }
      }
    );
  }
}

