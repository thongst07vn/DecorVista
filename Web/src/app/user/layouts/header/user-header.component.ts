declare var google :any
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user.service';
import { DesignerService } from '../../services/designer.service';
import { Designer } from '../../entities/designer.entity';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'user-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user-header.component.html',
  host:{
    'collision': 'UserHeaderComponent'
  }
})
export class UserHeaderComponent implements OnInit {
  user: any
  designer:any
  cartItems :any
  constructor(
    private userService: UserService,
    private designerService : DesignerService ,
    private cartService:CartService
  ){}
  async ngOnInit(){
    const userResult = await this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")));
    this.user = userResult['result'];
    if(this.user != null){
      const result = await this.cartService.innerCart(this.user.id);
      this.cartItems = result['result'].length
    }
    const designerResut = await  this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")))
    this.designer = designerResut['result']
  }

  logOut(){
    google.accounts.id.disableAutoSelect()
    sessionStorage.removeItem("loggedInUser")
    window.location.href = '/'
  }
}
