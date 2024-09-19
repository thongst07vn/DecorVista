
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
  constructor(
    private conect : Conect
  ){

  }
  ngOnInit(): void {
    // this.conect.reloadPage()
    console.log(JSON.parse(sessionStorage.getItem("loggedInUser")))
    
  }
}
