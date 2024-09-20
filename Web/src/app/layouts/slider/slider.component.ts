import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';

@Component({
  selector:'slider',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  constructor(
    private contect : Conect
  ){}
  ngOnInit(){

  } 

}
