import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';

@Component({
  selector:'footerK',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor(
    private contect : Conect
  ){}
  ngOnInit(){


  } 
}
