declare var google :any
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user-header.component.html',
  host:{
    'collision': 'UserHeaderComponent'
  }
})
export class UserHeaderComponent {
  user: any
  constructor(
    private userService: UserService
  ){}
  ngOnInit():void{
    this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
          this.user = res['result'] as User
          console.log(this.user)
      },
      error=>{
        console.log(error)
      }
    )
  }

  logOut(){
    google.accounts.id.disableAutoSelect()
    sessionStorage.removeItem("loggedInUser")
    window.location.href = '/'
  }
}
