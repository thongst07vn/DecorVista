declare var google :any
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { DesignerService } from '../../services/designer.service';
import { Designer } from '../../entities/designer.entity';

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
  designer:any
  constructor(
    private userService: UserService,
    private designerService : DesignerService 
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
    this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
          this.designer = res['result'] as Designer
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
