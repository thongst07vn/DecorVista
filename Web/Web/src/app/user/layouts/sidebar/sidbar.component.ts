import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sidbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sidbar.component.html',
  host:{
    'collision': 'SidbarComponent'
  }
})
export class SidbarComponent {
  
}
