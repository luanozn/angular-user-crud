import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {
    name: '',
    login: '',
    phone: '',
    email: ''
  }
  greenDarkStyle: any;


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

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

    this.greenDarkStyle = {
      background:"#568203"
    }
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
