import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';

@Component({
  selector: 'headerK',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private contect : Conect
  ){}
  ngOnInit(){

  } 
}
