
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { UserSevice } from '../../services/user.service';
import { User } from '../../entities/user.entity';


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
  constructor(
    private conect : Conect,
    private userService: UserSevice
  ){
    // this.conect.reloadPage()
  }
  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem("loggedInUser")))

    this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
          this.user = res['result'] as User
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
