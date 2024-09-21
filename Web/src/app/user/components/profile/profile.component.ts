
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/user.entity';
import { DesignerService } from '../../services/designer.service';
import { Designer } from '../../entities/designer.entity';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './profile.component.html',
  host:{
    'collision': 'ProfileComponent'
  }
})
export class ProfileComponent implements OnInit {
  user:User
  designer:Designer
  constructor(
    private conect : Conect,
    private userService: UserService,
    private designerService : DesignerService 

  ){}
  ngOnInit(): void {

    this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
          if(res['result']!=null){
            this.user = res['result'] as User
          }
          console.log(this.user)
      },
      error=>{
        console.log(error)
      }
    )
    this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
        if(res['result']!=null){
          this.designer = res['result'] as Designer
        }
          console.log(this.user)
      },
      error=>{
        console.log(error)
      }
    )
    this.conect.addStyle("src/assets/css/light/components/list-group.css")
    this.conect.addStyle("src/assets/css/light/users/user-profile.css")
    this.conect.addStyle("src/assets/css/dark/components/list-group.css")
    this.conect.addStyle("src/assets/css/dark/users/user-profile.css")

    // this.conect.reloadPage()

  }
}
