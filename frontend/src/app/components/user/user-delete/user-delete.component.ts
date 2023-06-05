import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User = {
    login: '',
    name: '',
    phone: '',
    email: ''
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Exclusão de Usuários',
      icon: 'cancel',
      routeUrl:'/users/delete'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.userService.readById(id).subscribe(
        user => {
          this.user = user
        }
      )
    }
  }

  delete(): void {
    this.userService.delete(this.user.login).subscribe(() => {
      this.userService.showMessage('Usuário excluído com sucesso')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
