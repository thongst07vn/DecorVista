
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './profile.component.html',
  host:{
    'collision': 'ProfileComponent'
  }
})
export class ProfileComponent implements OnInit {
  user:any
  constructor(
    private conect : Conect
  ){
    // this.conect.reloadPage()
  }
  ngOnInit(): void {
    // console.log(JSON.parse(sessionStorage.getItem("loggedInUser")))
    this.user = JSON.parse(sessionStorage.getItem("loggedInUser"))
    console.log(this.user)
    this.conect.addStyle("src/assets/css/light/components/list-group.css")
    this.conect.addStyle("src/assets/css/light/users/user-profile.css")
    this.conect.addStyle("src/assets/css/dark/components/list-group.css")
    this.conect.addStyle("src/assets/css/dark/users/user-profile.css")

    // this.conect.reloadPage()

  }
}
