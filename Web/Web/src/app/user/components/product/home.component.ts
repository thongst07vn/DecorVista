
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { delay, from, interval, map, Observable, Subscription  } from 'rxjs';
import { CommonModule } from '@angular/common';
import { data } from 'jquery';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private conect : Conect,
  ){
  }
  async ngOnInit(){
    // this.conect.reloadPage()
    
  }
}
